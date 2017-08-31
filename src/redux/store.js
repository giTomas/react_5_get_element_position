import {  createStore } from 'redux';
import scrollProgressReducer from './reducers';

const store = createStore(scrollProgressReducer);

export default store;
