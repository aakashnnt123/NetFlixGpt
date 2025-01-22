import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
 const[IsSignInForm , setIsSignInForm] = useState(true);
  const toggleSignInForm = ()=>{
     setIsSignInForm(!IsSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg" alt='background-img'/>
      </div>
       <form className='w-3/12  bg-black p-12 absolute mt-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
       <h1 className='font-bold text-3xl py-4'>{IsSignInForm?"Sign In":"Sign Up"}</h1>
       {!IsSignInForm && <input type='text' placeholder='  Enter Your Name' className='p-2 my-4 w-full bg-gray-700 rounded-lg'/>}
        <input type='text' placeholder='  Enter Your Email-Id' className='p-2 my-4 w-full bg-gray-700 rounded-lg'/>
        <input type='password' placeholder='  Enter Your Password' className='p-2 my-4 w-full bg-gray-700 rounded-lg'/>
        <button className='py-2 my-4 bg-red-700 w-full rounded-lg'>{IsSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-2 text-sm' >{IsSignInForm?"New to Netflix..? ":"Already Registered.."}<span className='cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm?"Signup Now":"SignIn Now"}</span></p>
       </form>
       
      </div>
  )
}

export default Login;