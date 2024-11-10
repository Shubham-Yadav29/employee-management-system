// import React, { useState } from 'react';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Username:', username);
//         console.log('Password:', password);

//         setPassword('')
//         setUsername('')
//     };

//     return (
//     <div className="login-container">
//         <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//             <div className="textbox">
//             <input
//                 type="email"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//             />
//             </div>
//             <div className="textbox">
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             </div>
//         <button type="submit" className="login-btn">Login</button>
//         </form>
//         </div>
//     </div>
//     );
// };

// export default Login;
