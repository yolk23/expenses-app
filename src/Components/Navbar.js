import React from "react";
import { NavLink } from "react-router-dom";
import { TbPigMoney } from "react-icons/tb";
import { useAuth } from "../Auth/Context/UserContext";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className=" p-2 flex justify-between items-center bg-white">
      <div className="">
        <NavLink
          to="/"
          className="mr-4 flex text-sm md:text-md"
          activeClassName="font-bold"
        >
          <TbPigMoney className="my-auto" /> Moneyging
        </NavLink>
      </div>
      <div class="text-sm md:text-md">
        <NavLink
          to="/"
          className="mr-4 hover:text-gray-600 min"
          activeClassName="font-bold"
        >
          Home
        </NavLink>
        <NavLink
          to="/expenses"
          className="mr-4 hover:text-gray-600"
          activeClassName="font-bold"
        >
          About Me
        </NavLink>
        <NavLink
          to="/expenses"
          className="mr-4 hover:text-gray-600"
          activeClassName="font-bold"
        >
          Services
        </NavLink>
        {user && (
          <NavLink
            to="/expenses"
            className="mr-4 hover:text-gray-600"
            activeClassName="font-bold"
          >
            Expenses
          </NavLink>
        )}
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
