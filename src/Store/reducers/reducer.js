
import * as actionTypes from '../actionTypes';

const defaultState = {
  tasks: [],
  loading: false,
  error: null,
  success: null,
  addTaskSuccess:false,
  editTaskSuccess:false,
  deleteTaskSuccess:false,
  deleteBulksuccess:false,
  singleTask:null,
  

};

export default function taskReducer(state = defaultState, action) {
  let tasks = [...state.tasks];
  switch (action.type) {
    
    case actionTypes.GET_TASKS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.data
      };
    case actionTypes.GET_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


      case actionTypes.GET_TASK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        singleTask: action.data
      };
    case actionTypes.GET_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case actionTypes.ADD_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        success:null,
        addTaskSuccess:false,
      };
    case actionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks,action.task],
        success:'Task was added successfully',
        addTaskSuccess:true,

      };
    case actionTypes.ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


      case actionTypes.EDIT_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        success:null,
        editTaskSuccess:false
       
      };
    case actionTypes.EDIT_TASK_SUCCESS:
      
      const taskIndex = tasks.findIndex(task => task.id === action.task.id);
      tasks[taskIndex] = action.task;
      return {
        ...state,
        loading: false,
        tasks,
        success:'Task was edited successfully',
        editTaskSuccess:true
       

      };
    case actionTypes.EDIT_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

      

      case actionTypes.DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        success:null,
        deleteTaskSuccess:false

      };
    case actionTypes.DELETE_TASK_SUCCESS:
      
      const taskIndexDelete = tasks.findIndex(task => task.id === action.task.id);
      tasks.splice(taskIndexDelete, 1);
      return {
        ...state,
        loading: false,
        tasks,
        success:'Task was deleted successfully',
        deleteTaskSuccess:true,
       
       
       

      };
    case actionTypes.DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
     
       
      };
      



      case actionTypes.DELETE_BULKTASKS_REQUEST:
      return {
        ...state,
        loading: true,
        success:null,
        deleteBulksuccess:false,
       

      };
    case actionTypes.DELETE_BULKTASKS_SUCCESS:
      
      return {
        ...state,
        loading: false,
        tasks,
        success:'Tasks were deleted successfully',
        deleteBulksuccess:true,
       
       
       

      };
    case actionTypes.DELETE_BULKTASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
     
       
      };

    default: return state;
  }


}


