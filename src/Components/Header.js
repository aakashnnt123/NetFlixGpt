import React from 'react';
import {signOut } from "firebase/auth";
import {auth} from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
 const userSelect = useSelector((store)=> store.user);
  const navigate =  useNavigate ();
const handleSignOut = ()=>{
  signOut(auth).then(() => {
    navigate("/");
  }).catch((error) => {
    navigate("/error");
  });
}

  return (
    <div className="absolute z-20 flex justify-between w-full px-4 items-center">
  <img 
    className="w-44 py-2 bg-gradient-to-b from-black"
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
    alt="logo"
  />
  
  {userSelect && <div className="flex items-center space-x-4">
    <img 
      className="w-12 h-12 rounded-md border-red-50"
      src={userSelect.photoURL}
      alt="usericon"
    />
    <button  onClick ={handleSignOut}className="bg-red-600 text-white px-4 py-2 rounded">Sign Out</button>
  </div>}
</div>

    
  )
}

export default Header
