import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './reducers/reducer';
import testReducer from './reducers/testReducer'
import logger from 'redux-logger';

const rootReducer=combineReducers({
taskReducer,
testReducer,
});

const middlewares=applyMiddleware(thunk,logger);
export const store = createStore(rootReducer,middlewares);