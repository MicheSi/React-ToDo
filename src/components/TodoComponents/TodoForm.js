import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }

    handleChanges = e => {
        console.log(e.target.value)
        this.setState({
            todoText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.todoText);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                name='task'
                value={this.state.todoText}
                onChange={this.handleChanges}
                />
                <button>Add New Task</button>
            </form>
        )
    }

}

export default TodoForm;