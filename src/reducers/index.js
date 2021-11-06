import { combineReducers, createStore } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({ bookReducer });
const store = createStore(rootReducer);

export default store;
