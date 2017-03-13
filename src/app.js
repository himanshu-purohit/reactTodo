import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {reduxStore} from './reduxStore'

console.log(reduxStore);
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
        //console.log("Props")
        //console.log(this.props);
        const taskList = this.props.tasks.tasks.map(task => {
            return <li key={task.name} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>{task.name + " " + task.status}</li>;
        })
        return (
            <ul>{taskList}</ul>
        );
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
        //console.log("****Action dispatched*****");
        //console.log(action);
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

class ContainerComponent extends React.Component {
    render() {
        return (
            <div>
                <AddTaskComponent />
                <TaskListComponent tasks={reduxStore.getState()} />
            </div>
        )
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
