import React from 'react';

const Task = props => {
    return (
        <div className='task'>
            <p>{props.task.task}</p>
        </div>
    )
} 

export default Task;