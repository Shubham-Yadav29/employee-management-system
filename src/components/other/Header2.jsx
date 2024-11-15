import React from 'react'
const Header2 = ({handleLogout}) => {
    return (
        <div className="container">
        <div className="admin-panel">
            <h1 className="admin-title">Admin Panel</h1>
            <button className="logout-btn" onClick={handleLogout}>Log out</button>
        </div>

        <div className="task-container">
            <form className="task-form">
                <div className="left-side">
                <div className="input-field">
                    <label>Task Title</label>
                <input 
                placeholder='Assign a Task'
                type="text" 
                name="title"/>
            </div>

            <div className="input-field">
                <label>Date</label>
                <input 
                type="date" 
                name="date" 
                />
            </div>

            <div className="input-field">
                <label>Assigned To</label>
                <input 
                placeholder='Employee name'
                type="text" 
                name="assignedTo" 
                />
            </div>

            <div className="input-field">
                <label>Category</label>
                <input 
                placeholder='Design, dev, etc'
                type="text" 
                name="category" 
                />
            </div>
        </div>

        <div className="right-side">
            <div className="input-field">
                <label>Description</label>
                <textarea 
                name="description" 
                />
            </div>

            <button type="submit" className="create-btn">Create Task</button>
        </div>
        </form>
    </div>
    </div>
    )
}

export default Header2