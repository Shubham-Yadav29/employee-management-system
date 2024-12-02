
import React, { useState } from 'react'
const NewTask = ({ data, incrementCompleted, incrementFailed }) => {
    const [taskStatus, setTaskStatus] = useState(null);

    const markAsCompleted = () => {
        setTaskStatus('completed');
        incrementCompleted();  // This will update the completedCount in Greeting
    };

    const markAsFailed = () => {
        setTaskStatus('failed');
        incrementFailed();  // This will update the failedCount in Greeting
    };

    return (
        <div className="greeting-container">
            <div className="task-header">
                <p className="top-left">{data.category}</p>
                <p className="top-right">{data.task_date}</p>
            </div>

            <div className="content">
                <h1 className="header">{data.task_title}</h1>
                <p className="description">{data.task_description}</p>

                {taskStatus && (
                    <p className={`status-message ${taskStatus}`}>
                        {taskStatus === 'completed' ? 'Completed' : 'Failed'}
                    </p>
                )}

                <div className="task-action-buttons">
                    {!taskStatus && (
                        <>
                            <button
                                className="mark-completed-btn"
                                onClick={markAsCompleted}
                            >
                                Mark as Completed
                            </button>
                            <button
                                className="mark-failed-btn"
                                onClick={markAsFailed}
                            >
                                Mark as Failed
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};



export default NewTask