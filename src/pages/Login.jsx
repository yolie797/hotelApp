import React from 'react'
// import "../css/login.css"
import "../App.css"
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className='container'>
      <div className ='details'>
        <h1>Login</h1>
          <div className='put'>
            <label>Email</label>
            <input id='det' type="email"/>
          </div>
  
          <div className='put'>
            <label>Password</label>
            <input id='det' type="password"/>
          </div>
  
          <div>
            <button className='btn-login' >
              <Link to="/home"/>Login</button>
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
