import React from 'react';

const FailedTaskCount = ({ failedCount }) => {
    return (
        <div className="task-box failed">
            <p id='failed-task' className='same'>{failedCount}</p>
            <p className='red'>Failed</p>
        </div>
    );
};

export default FailedTaskCount;
