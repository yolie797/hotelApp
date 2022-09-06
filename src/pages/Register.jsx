import React from 'react'
import { useState } from 'react';
// import "../css/register.css"
// import background from '../pictures/back.jpg'
import {useHistory} from "react-router-dom"
import { useUserAuth } from '../context2';


const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const {signUp}=useUserAuth();
    const navigate=useHistory();
  
    const handle = async (e) => {
      e.preventDefault();
      setError("");
      try {
          await signUp(email,password)
        //   alert("successfully Register");
          navigate.push('/payments');
          
      } catch (error) {
          setError(error.message);
      }
  };
    
  return (
   <>
    <div className='containerreg'>

   
        <div className='pic'></div>
        <div className='Register'>
        <h2>Registration Form</h2>

        {/* <div className='input'>
            <label>Name</label>
            <input id='input' typeof='name'/>
        </div>

        <div className='input'>
            <label>Surname</label>
            <input id='input' typeof='surname' required/>
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
        </div> */}

        <div className='input'>
            <label>Email Address</label>
            <input id='input' placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className='input'>
            <label>Password</label>
            <input id='input'  placeholder="Enter your email" onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <div className='btn-reg'>
            <button className='btn' onClick={handle}>
           Register
            </button>
            
            
        </div>
     </div>
    </div>
   </>     
  )
}

export default Register
