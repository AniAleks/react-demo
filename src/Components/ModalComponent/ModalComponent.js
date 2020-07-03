import React,{memo} from 'react';
import { Modal, Button, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenAlt, } from '@fortawesome/free-solid-svg-icons';
import classes from './Modal.module.css';
import { formatDate } from '../../Helpers/utils';
import PropTypes from 'prop-types';


function TaskModal(props) {
    const { taskfulldata } = props;

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className={classes.modalHeader}>
                    Full Task Information
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className={classes.modalTitle}>{taskfulldata.title}</h4>
                <Card.Text >
                    <span className={classes.spanElement}> {taskfulldata.description}</span>
                    <span className={classes.spanElementDate} >Created At {taskfulldata.created_at.slice(0, 10)}</span>
                    <span className={classes.spanElementDate}> Due Date {formatDate(taskfulldata.date)} </span>
                </Card.Text>
                <>
                    <Button variant="info" onClick={props.onEdit(taskfulldata.id)} className={classes.taskbutton}> <FontAwesomeIcon icon={faPenAlt} className={classes.Taskicon} /></Button>

                    <Button variant="info" onClick={props.onDelete} className={classes.taskbutton}><FontAwesomeIcon icon={faTrashAlt} className={classes.Taskicon} /> </Button>
                </>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

}

TaskModal.propTypes = {
    taskfulldata: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
};


export default memo(TaskModal);
