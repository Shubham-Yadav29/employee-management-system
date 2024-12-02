import React, { useState } from 'react';
import NewTask from './NewTask';
import CompletedTaskCount from './CompletedTaskCount';
import FailedTaskCount from './FailedTaskCount';

const TaskManager = () => {
    const [completedCount, setCompletedCount] = useState(0);
    const [failedCount, setFailedCount] = useState(0);

    // Function to increment completed count
    const incrementCompleted = () => {
        setCompletedCount(completedCount + 1);
    };

    // Function to increment failed count
    const incrementFailed = () => {
        setFailedCount(failedCount + 1);
    };

    return (
        <div>
            <CompletedTaskCount data={{ task_count: { completed: completedCount } }} />
            <FailedTaskCount data={{ task_count: { failed: failedCount } }} />
            
            {/* Pass the increment functions as props */}
            <NewTask
                incrementCompleted={incrementCompleted}
                incrementFailed={incrementFailed}
            />
        </div>
    );
};

export default TaskManager;
