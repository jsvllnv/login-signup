import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import email_icon from '../Assets/em.png'
import password_icon from '../Assets/padlock.png'



const Login = () => {
  return (
    <div className='container'>
            <div className='header'>
                <div className='text'>Log In</div>
                <div className='underline'></div>
            </div>

                <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='Email'/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password'  placeholder='Password'/>
                </div>
            </div>

            <span className='forgot-password'>
                Create your account <Link to='/register'>Here.</Link>
            </span>
            <div className='submit-container'>
            <Link to='/dashboard' className='submit'>Log In</Link>

            </div>
        </div>
  )
}

export default Login