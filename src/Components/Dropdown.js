import React, { useState } from 'react';
import { useAuth } from '../Auth/Context/UserContext';
import { auth } from "../Utils/firebase";
import { signOut } from 'firebase/auth';
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user,logout} = useAuth()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const signOutAccount = async ( ) =>{
    try{
      signOut(auth)
      alert('user has been logged out')
      logout();
      console.log(user)

    }catch(err){
        console.error(err)
    }
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
        <CgProfile />
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-5 w-42 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
                {user?
            <> <p>Signed in As {user.email}</p>
            <button onClick={signOutAccount} className="hover:text-red-600">Sign Out</button><NavLink to="/Profile" activeClassName="font-bold">Profile Page</NavLink></>:
            <><NavLink to="/signin" activeClassName="font-bold">Sign In</NavLink>
            <NavLink to="/signup" className="mr-4" activeClassName="font-bold">Sign Up</NavLink>
     
            </>}
         
           
          <div className="py-1" role="none">

          </div>
        </div>
      )}
            
    </div>
  );
};

export default Dropdown;
