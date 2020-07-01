import * as actionTypes from '../actionTypes';
import {request} from '../../Helpers/request';

export default function getSingleTask(id){
    return (dispatch)=>{
        dispatch({type: actionTypes.GET_TASK_REQUEST});
        request.get(`/tasks/${id}`)
        .then(res => {
            console.log(res)
            dispatch({type: actionTypes.GET_TASK_SUCCESS, data: res});
        })
        .catch(error=>{
            dispatch({type: actionTypes.GET_TASK_FAILURE, error: error.toString()});
        });
    }
};