import React, { useState } from 'react';
import axios from 'axios';
import { isLoggedIn } from './Homepage';



const Signup = () => {

  const [user,setUser] = useState({
    username:"",
    email:"",
    password: "",
    confirmpassword: ""
  })
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser({username: username, email: email, password: password, confirmpassword: confirmpassword});
    axios.post('http://localhost:4000/api/users/signup', user).then(res => console.log(res))

    // Add login functionality here
  };

  return (
    <div className='signup-container'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>
          UserName:
          <input type="username" value={username} onChange={handleUserChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Confirm Password:
          <input type="confirmpassword" value={confirmpassword} onChange={handleConfirmPassword} />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
