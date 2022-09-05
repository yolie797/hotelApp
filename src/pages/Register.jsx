import React from 'react'
// import "../css/register.css"
// import background from '../pictures/back.jpg'
import {Link} from "react-router-dom"



const Register = () => {
  return (
   <>
    <div className='container'>

    <div className='logo'>
        <h1>HOTEL JUBILANT</h1>
    </div>
        <div className='pic'></div>
        <div className='Register'>
        <h2>HJ Registration Form</h2>

        <div className='input'>
            <label>Name</label>
            <input id='input' typeof='name'/>
        </div>

        <div className='input'>
            <label>Surname</label>
            <input id='input' typeof='surname'/>
        </div>

        <div className='input'>
            <label>Address</label>
            <input id='input' typeof='address'/>
        </div>

        <div className='input'>
            <label>Country</label>
            <input id='input'  typeof='country'/>
        </div>

        <div className='input'>
            <label>City</label>
            <input id='input' typeof='city'/>
        </div>

        <div className='input'>
            <label>Phone</label>
            <input id='input' typeof='text'/>
        </div>

        <div className='input'>
            <label>Email Address</label>
            <input id='input' typeof='Email'/>
        </div>

        <div className='input'>
            <label>Password</label>
            <input id='input'  typeof='password'/>
        </div>

        <div className='btn'>
            <button className='btn'>
            <Link to='/Login'/>
            </button>
            
            
        </div>
     </div>
    </div>
   </>     
  )
}

export default Register
