import React from 'react'
// import "../css/login.css"
import "../App.css"
import {Link, useHistory} from 'react-router-dom'
import { useState } from 'react'
import { useUserAuth } from '../context2'


const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const {login}=useUserAuth();
  const navigate=useHistory();

  const handleSignIn=async(e)=>{
    e.preventDefault();
    setError("");
    try {
      await login(email,password)
      navigate.push("/payment")
    } catch (error) {
      setError(error.message)
      
    }
  }
  return (
    <div className='container-log'>
      <div className ='details'>
        <h1>Login</h1>
          <div className='put'>
            <label>Email</label>
            <input 
            id='det'
            type="email"
            placeholder='Email Placeholder'
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
  
          <div className='put'>
            <label>Password</label>
            <input
             id='det' 
             type="password"
             placeholder='Password'
             onChange={(e)=>setPassword(e.target.value)}/>
          </div>
  
          <div className='btnl'>
            <button className='btn-login' onClick={handleSignIn} >
              Login</button>
          </div> 



          <div className='acc'>
          <span>Don't have an account?</span>
          <span>
            <Link to="/Register">Register now</Link>
          </span>
          </div>
          
      </div>
    </div>
  )
}
export default Login
