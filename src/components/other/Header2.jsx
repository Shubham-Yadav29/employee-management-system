import React, { useContext, useState } from 'react';
import { Authcontext } from '../../context/AuthProvider';

const Header2 = (props) => {
    const [data, setdata] = useContext(Authcontext);

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '');
        props.changeUser('');
        // window.location.reload()
    };

    // State variables for task details
    const [TaskAssignTo, setTaskAssignTo] = useState('');
    const [task_description, setTaskDescription] = useState('');
    const [task_date, setTaskDate] = useState('');
    const [task_title, setTaskTitle] = useState('');
    const [category, setTaskCategory] = useState('');

    // State to track invalid name and input focus
    const [invalidName, setInvalidName] = useState(false);
    const [inputFocused, setInputFocused] = useState(false); // Track if the input is focused
    const [errorMessage, setErrorMessage] = useState('');

    const createHandle = (e) => {
        e.preventDefault();
    
        // Validation for the name field
        const employeeNames = data.map((elem) => elem.name.toLowerCase());
        if (!employeeNames.includes(TaskAssignTo.toLowerCase())) {
            setInvalidName(true);
            setErrorMessage('Wrong name entered. Please check again.');
            return; // Prevent form submission if name is invalid
        }
    
        // Reset error state if name is valid
        setInvalidName(false);
        setErrorMessage('');
    
        // Create the new task object
        const newTask = {
            category,
            task_date,
            task_description,
            task_title,
            active: false,
            completed: false,
            new_task: true,
            failed: false,
        };
    
        // Clone the existing data to avoid direct mutation
        const updatedData = data.map((elem) => {
            if (TaskAssignTo === elem.name) {
                // Add the new task to the employee's tasks
                const updatedEmployee = { 
                    ...elem, 
                    tasks: [...elem.tasks, newTask] 
                };
                
                // Update task count
                if (updatedEmployee.task_count) {
                    updatedEmployee.task_count.new_task = updatedEmployee.task_count.new_task + 1;
                }
                
                return updatedEmployee;
            }
            return elem; // If the employee name doesn't match, return as is
        });
    
        // Update context with the new data
        setdata(updatedData);
        console.log(updatedData); // Check if the data is correct
    
        // Store the updated data in localStorage
        localStorage.setItem('employees', JSON.stringify(updatedData));
    
        // Reset form inputs
        setTaskAssignTo('');
        setTaskCategory('');
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
    };
    // Handle the input focus and blur events
    const handleFocus = () => {
        setInputFocused(true); // Mark the input as focused
    };

    const handleBlur = () => {
        setInputFocused(false); // Mark the input as unfocused
    };

    return (
        <div className="container">
            <div className="admin-panel">
                <h1 className="admin-title">Admin Panel</h1>
                <button className="logout-btn" onClick={logOutUser}>
                    Log out
                </button>
            </div>

            <div className="task-container">
                <form className="task-form" onSubmit={createHandle}>
                    <div className="left-side">
                        <div className="input-field">
                            <label>Task Title</label>
                            <input
                                value={task_title}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                placeholder="Assign a Task"
                                type="text"
                                name="title"
                            />
                        </div>

                        <div className="input-field">
                            <label>Date</label>
                            <input
                                value={task_date}
                                onChange={(e) => setTaskDate(e.target.value)}
                                type="date"
                                name="date"
                            />
                        </div>

                        <div className="input-field">
                            <label>Assigned To</label>
                            <input
                                value={TaskAssignTo}
                                onChange={(e) => setTaskAssignTo(e.target.value)}
                                placeholder="Employee name"
                                type="text"
                                name="assignedTo"
                                onFocus={handleFocus} // Input focus event
                                onBlur={handleBlur}  // Input blur event
                                style={{
                                    borderColor: invalidName
                                        ? 'red'   // Red if name is invalid
                                        : inputFocused
                                        ? 'green'  // Green when focused
                                        : 'white', // White when not focused or invalid
                                    borderWidth: '2px',
                                    transition: 'border-color 0.3s', // Smooth border transition
                                }}
                            />
                            {invalidName && (
                                <div style={{ color: 'red', marginTop: '5px' }}>
                                    {errorMessage}
                                </div>
                            )}
                        </div>

                        <div className="input-field">
                            <label>Category</label>
                            <input
                                value={category}
                                onChange={(e) => setTaskCategory(e.target.value)}
                                placeholder="Design, dev, etc"
                                type="text"
                                name="category"
                            />
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="input-field">
                            <label>Description</label>
                            <textarea
                                value={task_description}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                name="description"
                            />
                        </div>

                        <button type="submit" className="create-btn">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Header2;
