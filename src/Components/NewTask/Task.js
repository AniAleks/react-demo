import React from 'react';
import classes from './Task.module.css';
import { Card, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '../../Helpers/utils';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import deleteTask from '../../Store/actions/deleteTask';
import PropTypes from 'prop-types';


function NewTask(props) {
    const { data } = props;

   const deleteTask = () => {
        props.deleteTask(data.id);
    };

        
        return (
            <Card className={classes.TaskCard} >
                <Card.Header as="h5" className={classes.headline}>  <InputGroup.Prepend className={classes.inlineblock}>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={props.handleCheckbox} checked={props.isSelected} />

                </InputGroup.Prepend > Due Date  {formatDate(data.date)}

                </Card.Header>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <>
                        <Card.Text className={classes.taskText} >
                            {data.description}
                        </Card.Text>
                        <p>Created at {formatDate(data.created_at)}</p>
                        <Button variant="info" onClick={props.onEdit(data.id)} className={classes.taskbutton}> <FontAwesomeIcon icon={faPenAlt} className={classes.Taskicon} /></Button>

                        <Button variant="info" onClick={deleteTask} className={classes.taskbutton}><FontAwesomeIcon icon={faTrashAlt} className={classes.Taskicon} /> </Button>
                        <p><Button variant="info" className={classes.viewButton} onClick={props.onOpenModal}>Open Task Modal </Button></p>
                        <Link to={`/task/${data.id}`}><Button variant="info" className={classes.viewButton} >Open Task Tab </Button></Link>

                    </>
                </Card.Body>
            </Card>
        );
}


NewTask.propTypes = {
    data: PropTypes.object.isRequired,
    onOpenModal: PropTypes.func.isRequired,
    handleCheckbox:PropTypes.func.isRequired,
    onEdit:PropTypes.func.isRequired,
    isSelected:PropTypes.bool.isRequired,
  };

const mapDispatchToProps = {
    deleteTask,

}

export default connect(null, mapDispatchToProps)(NewTask);
