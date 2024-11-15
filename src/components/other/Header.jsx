import React from 'react'
const Header = ({handleLogout}) => {
    return (
    <div className="dashboard">

        <div className="header-section">
        <div className="header-left">
        Hello <p className='user-name'>Shubham 👋</p>
        </div>

        <div className="header-right">
            <button className="logout-btn" onClick={handleLogout}>Log Out</button>
        </div>
        </div>

    <div className="task-container">
        <div className="task-box new">
            <p id='new-task' className='same'>0</p>
            <p>New Task</p>
        </div>
        <div className="task-box accepted">
            <p id='accepted-task' className='same'>0</p>
            <p>Accepted</p>
        </div>
        <div className="task-box completed">
            <p id='completed-task' className='same'>0</p>
            <p className='yellow'>Completed</p>
        </div>
        <div className="task-box failed">
            <p id='failed-task' className='same'>0</p>
            <p>Failed</p>
        </div>
    </div>
    </div>
    )
}

export default Header