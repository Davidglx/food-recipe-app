import React, { useState } from 'react';
import './login.scss';
import { useRef } from 'react';

const Login = () => {
   

   return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
            <img
            className='logo'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
             />
            </div>
        </div>
        <div className='container'>
            <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            <button className='loginButton'>Sign In</button>
            <span>New To Netflix <b>Sign up now.</b></span>
            <small>This page is protected by Google reCaptcha to ensure you're not a bot. <b>Learn more</b></small>
            </form>
        </div>
    </div>
  )
}

export default Login;

// url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg"); 