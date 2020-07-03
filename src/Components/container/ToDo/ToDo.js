import React, { Component } from 'react';
import AddEditModal from '../../AddEditModal/AddEditModal';
import NewTask from '../../NewTask/Task';
import classes from './ToDo.module.css';
import { Button,Row, Container, Col,InputGroup} from 'react-bootstrap';
import ModalComponent from '../../ModalComponent/ModalComponent';
import Search from '../../Search/Search';
import { connect } from 'react-redux';
import getTasks from '../../../Store/actions/getTasks';
import deleteTask from '../../../Store/actions/deleteTask';
import deleteBulkTasks from '../../../Store/actions/deleteBulkTasks';
import PropTypes from 'prop-types';



class ToDo extends Component {
    state = {
        tasksId: new Set(),
        openModal: false,
        taskIndex: null,
        showAddTaskModal: false,
        showEditTaskModal: false,
        editTaskIndex: null,

    }

    componentDidMount() {
        this.props.getTasks();
    }


    addCheckboxId = (id) => () => {

        let tasksId = new Set(this.state.tasksId);
        if (tasksId.has(id)) {
            tasksId.delete(id)
        }
        else {
            tasksId.add(id)
        }
        this.setState({ tasksId })
    }

    removeBulkHandler = () => {
        const tasksId = [...this.state.tasksId];
        this.props.deleteBulkTasks({ tasks: tasksId })

    }

    handleEdit = (taskId) => () => {
        this.setState({
            showEditTaskModal: true,
            taskIndex: null,
            editTaskIndex: this.props.tasks.findIndex(el => el.id === taskId)
        })
    }


    selectAllHandler = () => {
        const tasksId = this.props.tasks.map(task =>task.id);
        this.setState({ tasksId: new Set(tasksId) });
    }

    deSelectAllHandler = () => {
        this.setState({ tasksId: new Set() });
    }

    handleOpenModal = (taskIndex) => () => {
        this.setState({
            taskIndex: taskIndex,
        })
    }

    handleModalClose = () => {
        this.setState({
            taskIndex: null
        })
    }


    toggleTaskModal = (type) => () => {
        this.setState({ [`show${type}TaskModal`]: !this.state[`show${type}TaskModal`] });
    }


    componentDidUpdate(prevProps) {
        const searchStr = this.props.location.search
        if (prevProps.location.search !== searchStr) {
            this.props.getTasks(searchStr);
        }

        if (!prevProps.addTaskSuccess && this.props.addTaskSuccess) {
            this.setState({ showAddTaskModal: false });
        }
        if (!prevProps.editTaskSuccess && this.props.editTaskSuccess) {
            this.setState({ showEditTaskModal: false });
        }
        if (!prevProps.deletesuccess && this.props.deletesuccess) {
            this.props.getTasks();
        }
        if (!prevProps.deleteBulksuccess && this.props.deleteBulksuccess) {
            this.props.getTasks();
        }
    }

    searchTasks = (data) => {
        let query = '';

        for (let key in data) {
            if (data[key]) {
                query += `${key}=${data[key]}&`
            }
        }
        this.props.history.push(`/?${query}`);

    }

    deleteTask = (taskId) => () => {
        this.handleModalClose(taskId);
        this.props.deleteTask(taskId);
    }


    render() {
       
        const { tasksId, taskIndex } = this.state;
        const { tasks } = this.props;

        const tasksComponent = tasks
            .map((task, index) => {
                return (
                    <Col key={task.id} sm='6' md='4' lg='3' xl='3' >
                        <NewTask
                            data={task}
                            handleCheckbox={this.addCheckboxId(task.id)}
                            onEdit={this.handleEdit}
                            isSelected={this.state.tasksId.has(task.id)}
                            onOpenModal={this.handleOpenModal(index)}
                        />
                    </Col>
                )
            });
        
        return (
            <>
                <Container fluid>
                    <Row className={classes.inputRow}>
                        <Col>
                            <InputGroup.Append>
                                <Button variant="info"
                                    className={classes.newbutton}
                                    onClick={this.toggleTaskModal('Add')}
                                >Add New Task
                        </Button>
                            </InputGroup.Append>
                            < AddEditModal
                                type="Add"
                                open={this.state.showAddTaskModal}
                                onHide={this.toggleTaskModal('Add')}

                            />
                            < AddEditModal
                                type="Edit"
                                data={tasks[this.state.editTaskIndex]}
                                open={this.state.showEditTaskModal}
                                onHide={this.toggleTaskModal('Edit')}
                            />
                            <Search
                                onSubmit={this.searchTasks} />
                        </Col>

                    </Row>


                    <Row>
                        {tasksComponent.length ?
                            tasksComponent :
                            <p className={classes.noTasksDiv}>There are no tasks by the selected criteria! </p>}

                    </Row>

                    <Row>
                        <Col>
                            <Button
                                className={classes.removeButtons}
                                variant='danger'
                                onClick={this.removeBulkHandler}
                                disabled={!tasksId.size}
                            >
                                Remove Checked Tasks
                </Button>
                            {
                                tasks.length !== tasksId.size &&
                                <Button
                                    className={classes.removeButtons}
                                    variant='danger'
                                    onClick={this.selectAllHandler}
                                >
                                    Select All Tasks
                </Button>
                            }
                            {
                                !!tasksId.size &&
                                <Button
                                    className={classes.removeButtons}
                                    variant='danger'
                                    onClick={this.deSelectAllHandler}
                                >
                                    Deselect All Tasks
                </Button>
                            }
                        </Col>
                    </Row>
                </Container>
                {taskIndex !== null &&
                    <ModalComponent
                        show={taskIndex !== null}
                        onHide={this.handleModalClose}
                        taskfulldata={tasks[taskIndex]}
                        onDelete={this.deleteTask(tasks[taskIndex].id)}
                        onEdit={this.handleEdit}
                    />
                }


            </>
        );
    }
}


ToDo.propTypes = {
    tasks: PropTypes.array,
    addTaskSuccess: PropTypes.bool,
    editTaskSuccess: PropTypes.bool,
    deleteBulksuccess: PropTypes.bool,
    deletesuccess: PropTypes.bool,
    getTasks: PropTypes.func,
    deleteTask: PropTypes.func,
    deleteBulkTasks: PropTypes.func,
  };

const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer.tasks,
        addTaskSuccess: state.taskReducer.addTaskSuccess,
        editTaskSuccess: state.taskReducer.editTaskSuccess,
        deleteBulksuccess: state.taskReducer.deleteBulksuccess,
        deletesuccess: state.taskReducer.deletesuccess

    }
}

const mapDispatchToProps = {
    getTasks,
    deleteTask,
    deleteBulkTasks,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);