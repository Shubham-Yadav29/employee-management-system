import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className="greeting-container">

        <div className="task-header">
            <p className="top-left">{data.category}</p>
            <p className="top-right">{data.task_date}</p>
            </div>

            <div className="content">
            <h1 className="header">{data.task_title}</h1>
            <p className="description">{data.task_description}</p>
            </div>
        </div>
    )
}

export default FailedTask