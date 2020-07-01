import * as actionTypes from '../actionTypes';
import {request} from '../../Helpers/request';

export default function deleteBulkTasks({ tasks: tasksId }){
    return (dispatch)=>{
        dispatch({type: actionTypes.DELETE_BULKTASKS_REQUEST});
        request.delete(`/tasks`,{ tasks: tasksId })
        .then(res => {
            dispatch({type: actionTypes.DELETE_BULKTASKS_SUCCESS, task: res});
        })
        .catch(error=>{
            dispatch({type: actionTypes.DELETE_BULKTASKS_FAILURE, error: error.toString()});
        });
    }
};

