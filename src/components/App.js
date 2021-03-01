import React, { Component } from 'react';
import Interface from './Interface';
import TaskList from './TaskList';

class App extends Component {
  state ={
    tasks:[
      {
        id: 1,
        text: "Dummy Task",
        active: true,
        important: false,
        date: new Date().getTime(),
        finish: null,
      },
    ]
  }


  doneTask = (id) =>{

    const index = this.state.tasks.findIndex(task => task.id === id)
    const data = [...this.state.tasks]
    

    const dateString = new Date().getTime()

    data[index].active = false;
    data[index].finish = dateString;

    

    this.setState({
      tasks: data 
    })

    // this.setState()
  }

  deleteTask =(id) =>{

    const index = this.state.tasks.findIndex(task => task.id === id)

    const tasks = [...this.state.tasks];

    tasks.splice(index,1)

    this.setState({
      tasks: tasks
    })

  }

  addTask = (text, important, date) =>{

    let id = this.state.tasks[this.state.tasks.length-1].id;

    console.log(id)
 
    const newTask ={
        id: ++id,
        text: text,
        active: true,
        important: important,
        date: new Date(`${date}`).getTime(),
        finish: null,
    }

    const allTasks = [...this.state.tasks, newTask];

    this.setState({
      tasks: allTasks
    })
  }
  render() { 
    return ( 
      <>
        <Interface add={this.addTask}/>
        <TaskList tasks = {this.state.tasks} done ={this.doneTask} delete = {this.deleteTask}/>
        <div>test</div>
      
      </>
    );
  }
}
 
export default App;

