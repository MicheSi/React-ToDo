// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import todo from './Todo';

const TodoList = props => {
    return (
        <div className='todoList'>
            {props.todo.map(task => (
                <todo key={task.id} task={task} />
            ))}
        </div>
    )
}

export default TodoList;