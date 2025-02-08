import React, { useEffect } from 'react';
import Browse from './Browse';
import Login from './login';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/firebase';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../Utils/UserSlice';

const Body = () => {

   const dispatch = useDispatch();
  

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, 
          displayName,photoURL
           } = user;
        dispatch(addUser({uid:uid , email:email, displayName:displayName , photoURL:photoURL}));
        console.log(user);
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  },[dispatch])
  // eslint-disable-next-line

  return (
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
  )
}


export default Body;