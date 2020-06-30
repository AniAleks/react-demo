import React, { Component } from 'react';
import classes from './style.module.css';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import deleteTask from '../../../Store/actions/deleteTask';
import editTask from '../../../Store/actions/editTask';
import getSingleTask from '../../../Store/actions/getSingleTask';
import { formatDate } from '../../../Helpers/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, InputGroup } from 'react-bootstrap';
import AddEditModal from '../../AddEditModal/AddEditModal';




class SingleTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,

        }
    }

    componentDidMount() {
        this.props.getSingleTask(this.props.match.params.id);
    }



    componentDidUpdate(prevProps) {
        if (!prevProps.editTaskSuccess && this.props.editTaskSuccess) {
            this.setState({ showEditModal: false })
            this.props.getSingleTask(this.props.match.params.id);
        }
    }

    handleEdit = () => {
        this.setState({ showEditModal: true });
    };

    toggleTaskModal = (type) => () => {

        this.setState({ showEditModal: false });
    };

    handleModalEdit = () => {
        this.toggleTaskModal();
        this.props.editTask(this.props.singleTask.id);
    }

    editTask = () => {
        const { title, date, description, id } = this.props.singleTask;
        const data = this.props;
        const taskData = {};

        (title !== data.title) && (taskData.title = title);
        (date !== data.date) && (taskData.date = date);
        (description !== data.description) && (taskData.description = description);

        this.props.editTask(id, taskData);

    }
    deleteTask = () => {
        const taskId = this.props.match.params.id;
        this.props.deleteTask(taskId);
        this.props.history.push('/');
    };

    render() {

        const { singleTask } = this.props;

        return (
            <>

                <h1 className={classes.heading}>Single task page</h1>


                {singleTask !== null &&
                    <Card className={classes.TaskCard} >
                        <Card.Header as="h5">  <InputGroup.Prepend >
                        </InputGroup.Prepend> Due Date  {formatDate(singleTask.date)}

                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{singleTask.title}</Card.Title>

                            <>
                                <Card.Text className={classes.textpart}>
                                    {singleTask.description}
                                </Card.Text>
                                <p>Created at {formatDate(singleTask.created_at)}</p>
                                <Button variant="info" onClick={this.handleEdit} className={classes.taskbutton}> <FontAwesomeIcon icon={faPenAlt} className={classes.Taskicon} /></Button>

                                <Button variant="info" onClick={this.deleteTask} disabled={!singleTask} className={classes.taskbutton}><FontAwesomeIcon icon={faTrashAlt} className={classes.Taskicon} /> </Button>


                            </>
                        </Card.Body>
                    </Card>

                }
                < AddEditModal
                    type="Edit"
                    data={singleTask}
                    open={this.state.showEditModal}
                    onHide={this.toggleTaskModal('Edit')}
                    onEdit={this.handleModalEdit}
                />
            </>


        );

    }
}



const mapStateToProps = (state) => {
    return {
        singleTask: state.taskReducer.singleTask,
        addTaskSuccess: state.taskReducer.addTaskSuccess,
        editTaskSuccess: state.taskReducer.editTaskSuccess,
        deleteTaskSuccess: state.taskReducer.deleteTaskSuccess,

    }
}

const mapDispatchToProps = {
    getSingleTask,
    deleteTask,
    editTask
}


export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(SingleTask));