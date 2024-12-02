import React from 'react';
import NewTaskCount from '../../taskCount/NewTaskCount';
import AcceptTaskCount from '../../taskCount/AcceptTaskCount';
import CompletedTaskCount from '../../taskCount/CompletedTaskCount';
import FailedTaskCount from '../../taskCount/FailedTaskCount';

const Header = (props) => {

    const logOutUser = ()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload()
        }
    return (
        <div className="dashboard">
            <div className="header-section">
                <div className="header-left">
                    {/* Display the employee's name */}
                    <p className='helo'>Hello</p><p className='name-hifi'> {props.data.name} 👋</p>
                </div>
                <div className="header-right">
                    <button className="logout-btn" onClick={logOutUser}>Log Out</button>
                </div>
            </div>

            <div className="task-container">
                <NewTaskCount data={props.data}/>
                <AcceptTaskCount data={props.data}/>
                {/* <CompletedTaskCount data={props.data}/>
                <FailedTaskCount data={props.data}/> */}
            </div>
        </div>
    );
};

export default Header;
