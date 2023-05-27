import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js';
import Error from './components/Error.js';


function App() {
  return (
  <Router>
    <div>
    <Routes>
      <Route exact path ='/' element = {<Homepage />} />
      <Route path = '/Signup' element = {<Signup />} />
      <Route path = '/Login' element = {<Login />} />
      <Route path = '/*' element = {<Error />} />
    </Routes>
  </div>
</Router>
  );}

export default App;
