import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {reduxStore} from './reduxStore'

class ContainerComponent extends React.Component {
    render() {
        return (
            <div>
                <AddTaskComponent />
                <TaskListComponent tasks={reduxStore.getState()} />
                <VisibilityFilterComponent />
            </div>
        )
    }
}

class AddTaskComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault;
        const action = {
            type: "ADD_TASK",
            task: {
                name: document.getElementById("taskInput").value,
                status: "Pending"
            }
        }

        document.getElementById("taskInput").value='';
        reduxStore.dispatch(action);
    }

    render() {
        return (
            <div id="addTaskContainer">
                <form>
                    <input type="text" id="taskInput"></input>
                    <a></a>
                    <input type="button" value="Add Task" onClick={this.handleClick}></input>
                </form>
            </div>
        );
    }
}

class TaskListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(e);
        //e.target.style.textDecoration="line-through";
    }

    handleDoubleClick(e) {
        e.preventDefault();
        console.log(e);
    }

    render() {

        const taskList = this.props.tasks.tasks.map(task => {
            if(this.props.tasks.vFilter === "All" || task.status === this.props.tasks.vFilter)
            return <li key={task.name} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>{task.name + " " +task.status}</li>;
        })
        return (
            <ul>{taskList}</ul>
        );
    }
}

class VisibilityFilterComponent extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

    e.preventDefault;
    const action = {
        type: "SET_VFILTER",
        vFilter: e.target.value
        }
    
    reduxStore.dispatch(action);
    }


  render() {
    return(
      <div id="vFilterContainer" onClick={this.handleClick}>
        <input type="radio" name="vFilter" value="In-Progress"></input><label>{"In-Progress"}</label>
        <input type="radio" name="vFilter" value="Pending"></input><label>{"Pending"}</label>
        <input type="radio" name="vFilter" value="Completed"></input><label>{"Completed"}</label>
        <input type="radio" name="vFilter" value="All"></input><label>{"All"}</label>
      </div>
    );
  }
}

const render = () => {
    ReactDOM.render(
        <ContainerComponent />,
        document.getElementById('appContainer')
      )
}

reduxStore.subscribe(render);
render();
