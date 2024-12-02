import React from 'react'

const NewTaskCount = ({data}) => {
    return (
        <div className="task-box new">
        <p id='new-task' className='same'>{data.task_count.new_task}</p>
        <p>New Task</p>
    </div>
    )
}

export default NewTaskCount