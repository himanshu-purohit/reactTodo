import * as Redux from 'redux'
import {tasks} from './data'

const reducer = (state = tasks,action) => {
  const newState = Object.assign({},state);
  switch(action.type){
  case 'ADD_TASK':
    newState.tasks.push(action.task);
    return newState;
  case 'SET_VFILTER':
    newState.vFilter=action.vFilter;
    return newState;
  default:
    return state;
}}

export const reduxStore = Redux.createStore(reducer)
