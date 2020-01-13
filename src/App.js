import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Task from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

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
          completed: !task.purchased
        };
      } else {
        return task;
      }
    })
  }

  render() {
    return (
      <div>
        <h2>My To Do List</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList tasks={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
