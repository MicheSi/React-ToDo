import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import "./components/TodoComponents/Todo.css";

const tasks = [
    {
      task: 'Wash laundry',
      id: 1,
      completed: false
    },
    {
      task: 'Clean kitchen',
      id: 2,
      completed: false
    }
  ];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: tasks
    }
  }

  addTask = taskTitle => {
    const newTask = {
      task: taskTitle,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    })
  }
  
  toggleTask = id => {
    const newTaskList = this.state.todoList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    });
    this.setState({
      todoList: newTaskList
    });
  }

  clearCompleted = completed => {
    this.setState({
      todoList: this.state.todoList.filter(task =>
        !task.completed)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>My To Do List</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList tasks={this.state.todoList} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
