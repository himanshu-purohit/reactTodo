import * as React from 'react'
import * as ReactDOM from 'react-dom'
class TaskListComponent extends React.Component {
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }

    handleClick(e){
      e.preventDefault();
      console.log(e);
      //e.target.style.textDecoration="line-through";
    }

    handleDoubleClick(e){
      e.preventDefault();
      console.log(e);
    }

    render() {
        const taskList = this.props.tasks.map(task => {
            return <li key={task.name}
                       onClick={this.handleClick}
                       onDoubleClick={this.handleDoubleClick}>{task.name + " " + task.status}</li>;
        })
        return (
            <ul>{taskList}</ul>
        );
    }
}

ReactDOM.render(
    <TaskListComponent tasks={tasks}/>,
    document.getElementById('TaskListContainer')
  )
