import React, { useState } from 'react';
import Header2 from '../other/Header2';
import Task2 from '../other/Task2'

const App = (props) => {
    return (
    <>
    <Header2 changeUser={props.changeUser}/>
    <Task2/>
    </>
    );
};

export default App;
