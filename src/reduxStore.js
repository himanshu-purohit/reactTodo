import * as Redux from 'redux'
import {tasks} from './data'

const reducer = (state = tasks,action) => {
  switch(action.type){
  case 'ADD_TASK':
    //console.log("Dispatch Received for ADD_TASK");
    const newState = Object.assign({},state);
    newState.tasks.push(action.task);
    //console.log("*****New State****");
    //console.log(newState);
    return newState;
    break;
  default:
    return state;
}}

export const reduxStore = Redux.createStore(reducer)
//console.log ("ReduxStore: " + reduxStore.getState())
