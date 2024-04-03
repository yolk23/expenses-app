import React, { useState } from "react";
import { useAuth } from "../Auth/Context/UserContext";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const signOutAccount = async () => {
    try {
      toast.success("User has Sucessfully Logged Out");
      signOut(auth);
      logout();
      navigate("/SignIn");
    } catch (err) {
      console.error(err);
    }
  };

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
          className="absolute right-0 mt-5 w-32 rounded-md shadow-lg bg-white  ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {user ? (
            <>
              {" "}
              <p>Signed in As {user.email}</p>
              <button onClick={signOutAccount} className="hover:text-red-600">
                Sign Out
              </button>
              <NavLink to="/Profile" activeClassName="font-bold">
                Profile Page
              </NavLink>
            </>
          ) : (
            <>
              <div className="my-2">
                <NavLink to="/signin" className="font-bold ml-3">
                  Sign In
                </NavLink>
              </div>

              <div>
                <NavLink to="/signup" className="font-bold ml-3">
                  Sign Up
                </NavLink>
              </div>
            </>
          )}

          <div className="py-1" role="none"></div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
