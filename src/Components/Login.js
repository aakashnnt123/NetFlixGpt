import React, { useState ,useRef } from 'react'
import Header from './Header';
import checkValidData from '../Utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from '../Utils/firebase';
import {useDispatch } from 'react-redux';
import {addUser} from '../Utils/UserSlice';
import { Git_Url } from '../Utils/Constant';
import { BG_URL } from '../Utils/Constant';

function Login() {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errormessage , seterrormessage] = useState(null);

   const dispatch =  useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data..
    // console.log(email.current.value);
    // console.log(password.current.value)

    const response = checkValidData(email.current.value , password.current.value);
    // console.log(response);
    seterrormessage(response);

    if(response)return;

    // SIGNIN/SIGNUP Logic..
    if(!IsSignInForm){
      // Signup logic..
      createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
updateProfile(user, {
  displayName: username.current.value , photoURL: Git_Url
}).then(() => {
   const {uid, email, 
             displayName,photoURL
              } = auth.currentUser;
           dispatch(addUser({uid:uid , email:email, displayName:displayName , photoURL:photoURL}));
          //  console.log(user);
          
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  seterrormessage(errorCode+"-"+errorMessage);
});
    // console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage);
    // ..
  });

    }
    else{
      // SignIn logic..
      signInWithEmailAndPassword(auth,email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage);
  });
    }
};

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_URL} alt='background-img' />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className='w-3/12  bg-black p-12 absolute mt-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!IsSignInForm && <input
        ref={username}
          type='text' placeholder='  Enter Your Name' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />}
        <input
          ref={email}
          type='text' placeholder='  Enter Your Email-Id' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />
        <input
          ref={password}
          type='password' placeholder='  Enter Your Password' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />
          <p className='text-red-500 text-sm font-bold'>{errormessage}</p>
        <button
          className='py-2 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-2 text-sm'>{IsSignInForm ? "New to Netflix..? " : "Already Registered.."}<span className='cursor-pointer underline-offset-4' onClick={toggleSignInForm}>{IsSignInForm ? "Signup Now" : "SignIn Now"}</span></p>
      </form>
    </div>
  );
}

export default Login;