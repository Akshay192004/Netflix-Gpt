import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
   const[isSignInForm,setIsSignInForm]=useState(true);

   const toggleSignInForm=()=>{
     setIsSignInForm(!isSignInForm);
   };
  return (
    <div className="relative h-screen">
      <Header />
      <div className=" absolute w-screen bg-gradient-to-b from-black flex justify-between items-left   z-40 flex-col md:flex-row ">
      <img className="w-44  " src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="logo" />
      </div>
      <form className='w-5/12 absolute p-12 bg-black my-36  mx-auto left-0 right-0 text-white bg-opacity-80'>
     <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In":"Sign Up"}</h1>  
     {!isSignInForm&&<input type='text' placeholder='Full Name' className='p-2 m-2 w-full bg-gray-700'/> }   
      <input type='text' placeholder='Email Address or Phone' className='p-2 m-2 w-full bg-gray-700'/>
      <input type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700'/>
      <button className=' bg-red-500 text-white hover:bg-blue-700 p-2 m-2 w-full rounded-lg'>{isSignInForm ? "Sign In":"Sign Up"}</button>
     <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already registered?Sign In Now."}</p>
      </form>
    </div>
  );
};

export default Login;
