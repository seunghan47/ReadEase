import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../css/Login.css';
import { isLoggedIn } from './Homepage';


function Login() {
    const [user,setUser] = useState({
        email:"",
        password: ""
    })
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    LoginUser();
  }, [user]);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUser({email: email, password: password});
    

  };

  const LoginUser = async () =>{
    await axios.post('http://localhost:4000/api/users/login', user).then(res => {
      if (res.status == 200){
        localStorage.setItem("auth-token", res.data.token)
        localStorage.setItem("userId", res.data.user.id)
        window.location.href = '/';
      }
    })
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;


