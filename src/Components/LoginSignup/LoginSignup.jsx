import React from 'react'
import './LoginSignup.css'

import email_icon from '../Assets/em.png'
import password_icon from '../Assets/padlock.png'
import user_icon from '../Assets/user.png'


const LoginSignup = () => {
  return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='Name'/>
                </div>
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email'  placeholder='Email'/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password'  placeholder='Password'/>
                </div>
            </div>
            <div className='submit-container'>
                <div className="submit">Sign Up</div>
            </div>
        </div>

  )
}

export default LoginSignup