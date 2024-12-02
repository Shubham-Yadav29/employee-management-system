
import React from 'react'
const CompletedTaskCount = ({ completedCount }) => {
    return (
        <div className="task-box completed">
            <p id='completed-task' className='same'>{completedCount}</p>
            <p className='yellow'>Completed</p>
        </div>
    );
};

export default CompletedTaskCount