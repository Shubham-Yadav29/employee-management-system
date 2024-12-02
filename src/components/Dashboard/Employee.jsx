import React from 'react';
import Header from '../other/Header';
import Task from '../other/Task';

const Dashboard = (props) => {
return (
    <>
    <Header  changeUser={props.changeUser} data={props.data} />
    <Task data={props.data}/>
    </>
);
};

export default Dashboard;
