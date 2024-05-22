import { createStore, combineReducers } from 'redux';
import TodoReducer from './reducers/TodoReducers';

const reduxDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combineReducers({todos: TodoReducer}), {}, reduxDevToolEnhancer);

export default store;