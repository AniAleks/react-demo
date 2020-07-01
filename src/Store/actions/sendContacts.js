import * as actionTypes from '../actionTypes';
import {request} from '../../Helpers/request';

export default function sendContacts(contactData){
    return (dispatch)=>{
        dispatch({type: actionTypes.SEND_CONTACTS_REQUEST});
        request.post(`/contact`,contactData)
        .then(res => {
            dispatch({type: actionTypes.SEND_CONTACTS_SUCCESS, contact: res});
        })
        .catch(error=>{
            dispatch({type: actionTypes.SEND_CONTACTS_FAILURE, error: error.toString()});
        });
    }
};