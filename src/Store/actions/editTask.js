import * as actionTypes from '../actionTypes';
import {request} from '../../Helpers/request'

export default function editTask(id,taskData){
    return (dispatch)=>{
        dispatch({type: actionTypes.EDIT_TASK_REQUEST});
        request.put(`/tasks/${id}`,taskData)
        .then(res => {
            dispatch({type: actionTypes.EDIT_TASK_SUCCESS, task: res});
        })
        .catch(error=>{
            dispatch({type: actionTypes.EDIT_TASK_FAILURE, error: error.toString()});
        });
    }
}




