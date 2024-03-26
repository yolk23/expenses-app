import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border border-gray-800">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Expenses">Expenses</NavLink>
      <NavLink to="/SignUp">SignUp</NavLink>
    </div>
  );
};

export default Navbar;
