import React, { useState } from 'react';

const Login = ({handleLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username , password)
        setPassword('')
        setUsername('')
    };

    return (
    <div className="login-container">
            <div className="container-01">
        <h2 className="title">User Data</h2>
        <div className="table">
            <div className="table-header">
            <span>Name</span>
            <span>Email</span>
            <span>Password</span>
            </div>
            <div className="table-row">
            <span>Arjun Sharma</span>
            <span>Arjun@01.com</span>
            <span>123</span>
            </div>
            <div className="table-row">
            <span>Priya Verma</span>
            <span>Priya@02.com</span>
            <span>123</span>
            </div>
            <div className="table-row">
            <span>Ravi Patel</span>
            <span>Ravi@03.com</span>
            <span>123</span>
            </div>
            <div className="table-row">
            <span>Sita Reddy</span>
            <span>Sita@04.com</span>
            <span>123</span>
            </div>
            <div className="table-row">
            <span>Aarti Kumari</span>
            <span>Aarti@05.com</span>
            <span>123</span>
            </div>
            <div className="admin-panel-01">
            <p><strong>Admin Panel Access:</strong><br></br>
            <p class='alag'>Email - admin@me.com <br></br> Password - 123</p>
            </p>
        </div>
        
        </div>
    </div>

        <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="textbox">
            <input
                type="email"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div className="textbox">
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
        <button type="submit" className="login-btn">Login</button>
        </form>
        </div>
    </div>
    );
};

export default Login;
