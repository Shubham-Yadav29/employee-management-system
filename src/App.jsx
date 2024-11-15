// App.js
import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import Admin from './components/Dashboard/Admin';
import Employee from './components/Dashboard/Employee';
import Header from './components/other/Header';
import Header2 from './components/other/Header2';
import setlocalStorage from './components/Utils/Localstorage';
import getlocalStorage from './components/Utils/Localstorage';

const App = () => { 
  const [user, setuser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setuser(storedUser); // If user data exists, set it to the state
    }
  }, []);

  const handleLogin =(email , password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setuser('admin')
      localStorage.setItem('user', 'admin');
    }else if (email == 'user@me.com' && password == '123'){
      setuser('user')
      localStorage.setItem('user', 'user');
    }
    else {
      alert("Wrong credentials")
    }
  }
  const handleLogout =()=>{
    setuser(null)
    localStorage.removeItem('user');
  }
  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          {/* Show the Header or Header2 depending on user type */}
          {user === 'admin' ? (
            <Header2 handleLogout={handleLogout} />
          ) : (
            <Header handleLogout={handleLogout} />
          )}

          {/* Render the dashboard component */}
          {user === 'admin' ? (
            <Admin /> // Admin Dashboard
          ) : (
            <Employee /> // Employee Dashboard
          )}
        </>
      )}
    </>
  );
};

export default App;
