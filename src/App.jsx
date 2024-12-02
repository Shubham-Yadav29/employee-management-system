// App.js
import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import Admin from './components/Dashboard/Admin';
import Employee from './components/Dashboard/Employee';
import { Authcontext } from './context/AuthProvider';

const App = () => { 
  const [user, setuser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [data , setdata] = useContext(Authcontext);


  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setuser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])

  const handleLogin =(email , password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setuser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }else if (data){
      const employee = data.find((e) => email == e.email && password == e.password)
      if (employee)
      setuser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
    }
    else {
      alert("Wrong credentials")
    }
  }
  return ( 
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <Admin changeUser={setuser} /> : (user == 'employee' ? <Employee changeUser={setuser} data={loggedInUserData} /> : null) }
    </>
  );
};

export default App;
