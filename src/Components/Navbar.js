import React from "react";
import { NavLink } from "react-router-dom";
import { signOut} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useAuth } from "../Auth/Context/UserContext";

const Navbar = () => {
  const {user,logout} = useAuth()
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
    <div className="border border-gray-800 p-2 flex justify-between bg-white">
    <div>
      <NavLink to="/" className="mr-4" activeClassName="font-bold">Home</NavLink>
    </div>
    <div>
      <NavLink to="/expenses" className="mr-4" activeClassName="font-bold">Expenses</NavLink>
      <NavLink to="/signup" className="mr-4" activeClassName="font-bold">Sign Up</NavLink>
      <NavLink to="/signin" activeClassName="font-bold">Sign In</NavLink>
      <button onClick={signOutAccount}>Sign Out</button>
    </div>
  </div>
  );
};

export default Navbar;
