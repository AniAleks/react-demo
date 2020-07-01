import React,{Component} from 'react';
import {
  Modal, Button, InputGroup, FormControl, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import addTask from '../../Store/actions/addTask';
import editTask from '../../Store/actions/editTask';


class AddEditModal extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      date: '',
      description: ''
    };

    this.state = this.initialState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open && !this.props.open) {
      this.setState(this.initialState);
    }
    else if (!prevProps.open && this.props.open) {
      this.setState(this.props.data);
    }
  }

  onChangeHandler = (type) => (event) => {
    this.setState({
      [type]: event.target.value
    });
  };

  addTask = () => {
    const { title, date, description } = this.state;
    const taskData = {
      title,
      date,
      description
    };
    this.props.addTask(taskData);
    
  }
  editTask = () => {
    const { title, date, description,id } = this.state;
    const data=this.props;
    const taskData = {};

    (title!==data.title) && (taskData.title=title);
    (date!==data.date) && (taskData.date=date);
    (description!==data.description) && (taskData.description=description); 

    this.props.editTask(id,taskData);

  }

  render() {
    const { title, date, description } = this.state;
  
    return (
      <>

        <Modal
          show={this.props.open}
          onHide={this.props.onHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            {this.props.type === 'Add' ?  'Add new Task' : 'Edit task'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <InputGroup className="mb-3" >
                <FormControl
                  placeholder="Add title"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={title}
                  onChange={this.onChangeHandler('title')}

                />
              </InputGroup>
            <Form.Group controlId="exampleForm.ControlTextarea1">

              <Form.Control
                placeholder="Add new task"
                as="textarea" rows="3"
                value={description}
                onChange={this.onChangeHandler('description')} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Choose completion date</Form.Label>
              <p>
                <input
                  type="date"
                  value={date.slice(0, 10)}
                  onChange={this.onChangeHandler('date')}
                />
              </p>
            </Form.Group>

            {this.props.type === "Add" ?
              <InputGroup.Append>
                <Button variant="info"
                  disabled={!title}
                  onClick={this.addTask}
                >Add New Task</Button>
              </InputGroup.Append>
              :
              <InputGroup.Append>
                <Button variant="info"
                  disabled={!title}
                  onClick={this.editTask}
                >Save Edited Task</Button>
              </InputGroup.Append>
            }
          </Modal.Body>
        </Modal>
      </>
    )

  }
}


AddEditModal.propTypes = {
  type: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onAddTask: PropTypes.func,
  onEditTask: PropTypes.func,
};




export default  connect(null,{
  addTask,
  editTask
})(AddEditModal);