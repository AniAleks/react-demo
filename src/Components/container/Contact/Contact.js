import React, {useState,memo } from 'react';
import classes from './style.module.css';
import { Button, Row,Container,Col,Form,} from 'react-bootstrap';
import {nameValidator, emailValidator} from '../../../Helpers/validator';
import { withSnackbar } from 'notistack';
import {connect} from 'react-redux';
import sendContacts from '../../../Store/actions/sendContacts';
import PropTypes from 'prop-types';


function Contact(props) {
    
    let defaultState = {
            name: '',
            email: '',
            message: '',
        }

    const [contactState,setContacts]=useState(defaultState);

     const submitHandler = () => {
        const {name,email, message}=contactState;
        const contactData={
            name,
            email, 
            message
        }
        props.sendContacts(contactData);
        setContacts(defaultState);
        };

    const inputChangeHandler = (type) => (event) => {
        setContacts({
            ...contactState,
            [type]: event.target.value,
          });
        };

        const {name,email,message}=contactState;
        const isNameValid = nameValidator(name);
        const isEmailValid = emailValidator(email);
       
        return (
           
            <>
            
                <Container className={classes.container}>
                    <Row className='justify-content-md-center'>
                        <Col sm='6'>
                            <Form>

                                <Form.Group as={Col}>
                                    <Form.Label className={classes.labelContact}>Your name*</Form.Label>
                                    <Form.Control
                                    value={name}
                                    className={`${!nameValidator(name)? classes.invalid:''} ${classes.inputContact}`}
                                    size="sm" type="text" placeholder="Enter Your name" onChange={inputChangeHandler('name')} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className={classes.labelContact}>Email*</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                     value={email}
                                     className={`${!emailValidator(email)? classes.invalid :''} ${classes.inputContact}`}
                                        onChange={inputChangeHandler('email')} />
                                </Form.Group>

                                <Form.Group   as={Col} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className={classes.labelContact}>Please leave your feedback </Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Your feedback"
                                    value={message}
                                    onChange={inputChangeHandler('message')} 
                                    className={classes.inputFeedback}
                                    />
                                </Form.Group>

                                <Button variant="info" onClick={submitHandler}
                               disabled = {!(isNameValid && isEmailValid)}>
                                    Submit
                       </Button>

                            </Form>
                        </Col >


                    </Row>
                </Container>



            </>
        )
}

Contact.propTypes = {
    submitHandler: PropTypes.func,
  };
  
const mapDispatchToProps = {
    sendContacts
}

export default connect(null, mapDispatchToProps)(withSnackbar(memo(Contact)));