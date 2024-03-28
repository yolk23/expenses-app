import React from "react";
import { NavLink } from "react-router-dom";
import { signOut} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useAuth } from "../Auth/Context/UserContext";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const {user,logout} = useAuth()

  return (
    <div className="border border-gray-800 p-2 flex justify-between bg-white">
    <div>
      <NavLink to="/" className="mr-4" activeClassName="font-bold">Home</NavLink>
    </div>
    <div>
      <NavLink to="/expenses" className="mr-4" activeClassName="font-bold">Expenses</NavLink>
  
      
      
      <Dropdown/>
    </div>
  </div>
  );
};

export default Navbar;
