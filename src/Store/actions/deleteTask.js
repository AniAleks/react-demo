import * as actionTypes from '../actionTypes';
import {request} from '../../Helpers/request';

export default function deleteTask(id){
    return (dispatch)=>{
        dispatch({type: actionTypes.DELETE_TASK_REQUEST});
        request.delete(`/tasks/${id}`)
        .then(res => {
            dispatch({type: actionTypes.DELETE_TASK_SUCCESS, task: res});
        })
        .catch(error=>{
            dispatch({type: actionTypes.DELETE_TASK_FAILURE, error: error.toString()});
        });
    }
};

