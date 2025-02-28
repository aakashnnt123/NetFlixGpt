import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { Main_Logo } from "../Utils/Constant";
import { toggleGptSearchView } from "../Utils/GptSlice";
import { SUPPORTED_LANGUAGES } from "../Utils/Constant";
import { changeLanguage } from "../Utils/languageSlice";

const Header = () => {
  const userSelect = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).catch(() => {
      navigate("/error");
    });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e)=>{
     dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [navigate, dispatch]);

  return (
    <div className="absolute z-20 flex justify-between w-full px-4 items-center">
      <img
        className="w-36 bg-gradient-to-b from-black"
        src={Main_Logo}
        alt="logo"
      />

      {/* User Profile & Logout */}
      {userSelect && (
        <div className="flex items-center space-x-6 text-white p-2 rounded-md shadow-lg mt-3 opacity-90">
            {showGptSearch && <select className="bg-black p-2" onChange={handleLanguageChange}>
              { SUPPORTED_LANGUAGES.map((lang) => <option key ={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
            
            </select>}
          {/* GPT-Search Button */}
          <button
            onClick={handleGptSearch}
            className="bg-purple-500 text-black px-4 py-2 rounded-md hover:bg-purple-700 transition font-semibold"
          >
           {showGptSearch ? "Movies🎬" : "GPT-Search🔍"} 
          </button>

          {/* User Info */}
          <div className="flex items-center space-x-3">
            <img
              className="w-12 h-12 rounded-full border-2 border-gray-300"
              src={userSelect.photoURL}
              alt="User Icon"
            />
            <span className="text-lg font-semibold">
              {userSelect.displayName}
            </span>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
