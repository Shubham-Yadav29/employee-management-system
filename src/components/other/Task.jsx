import React, { useState } from 'react';
import AcceptTask from '../../TaskLists/AcceptTask';
import CompletedTask from '../../TaskLists/CompletedTask';
import FailedTask from '../../TaskLists/FailedTask';
import NewTask from '../../taskLists/NewTask';
import CompletedTaskCount from '../../taskCount/CompletedTaskCount';
import FailedTaskCount from '../../taskCount/FailedTaskCount';


const Greeting = ({ data }) => {
    const [completedCount, setCompletedCount] = useState(0);  // State to track completed tasks
    const [failedCount, setFailedCount] = useState(0);  // State to track failed tasks

    // Function to increment completed count
    const incrementCompleted = () => {
        setCompletedCount(prevCount => prevCount + 1);
    };

    // Function to increment failed count
    const incrementFailed = () => {
        setFailedCount(prevCount => prevCount + 1);
    };

    return (
        <div className="component-divs" id="task-list">
            <div className="special-div">
                <p className='complete-special'>
                    <CompletedTaskCount completedCount={completedCount} />
                </p>
                <p className='failed-special'>
                    <FailedTaskCount failedCount={failedCount} />
                </p>
                
            </div>
            
            {data.tasks.map((task, idx) => {
                if (task.active) {
                    return <AcceptTask key={idx} data={task} />;
                }
                if (task.failed) {
                    return <FailedTask key={idx} data={task} />;
                }
                if (task.new_task) {
                    return <NewTask 
                        key={idx} 
                        data={task} 
                        incrementCompleted={incrementCompleted} 
                        incrementFailed={incrementFailed} 
                    />;
                }
                if (task.completed) {
                    return <CompletedTask key={idx} data={task} />;
                }
            })}
            
            {/* Pass completedCount to CompletedTaskCount */}
            
            
        </div>
    );
};


export default Greeting;
