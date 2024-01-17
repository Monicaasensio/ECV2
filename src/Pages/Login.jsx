import React from 'react'
import './CSS/Login.css'
import logo1 from '../Components/Assets/small-logo-removebg-preview.png'

export default function Login() {
  return (
    <div className='login-page'>
      <div className="login-box">
        <h1>Sign Up</h1>
        <div className="login-inputs">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Your Email' />
            <input type="password" placeholder='Create Password' />
        </div>
        <button>Continue</button>
        <p className="login-account-option">Already have an account? <span>Login</span></p>
        <div className="login-agree">
            <input type="checkbox" name='' id='' />
            <p>To continue, agree to terms of use & privacy policy.</p>
        </div>
        <img className="logo-img" src={logo1} alt="mla crochet logo" />
      </div>
    </div>
  )
}
