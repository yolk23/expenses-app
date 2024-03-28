import React from "react";
import { useState } from "react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../../Utils/firebase";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate()
  const {login} = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError,setFormError]  =useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));  
  }
    

  const submitForm = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(formError).some(error=>error!=="")
    if(hasErrors){
      alert("Form not completed")
     
    } else
    {
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      await login(auth?.currentUser);
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  }
 
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };


  const validateInput = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    if (name === "email") {
      errorMessage = !value.trim() ? "Email is required" : "";
    }

    if(name === "password"){
      errorMessage = !value.trim() ? "Password is required" : ""
    } 

    setFormError(prevState => ({ ...prevState, [name]: errorMessage }));
  }


  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="container mx-auto max-w-lg bg-white rounded-lg p-8 border border-black">
        <h1 className="text-4xl text font-bold mb-5">Welcome Back!</h1>
        <p className="text-md text-gray-500 mb-5">Please enter your details.</p>
        <form className="border border-gray-400 rounded-lg p-8 space-y-4 min-h-[30rem]">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={validateInput}
            placeholder="Enter e-mail"
            className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 mb-3"
          />
            <span className="text-red-600">{formError.email}</span>
          <div>
            <label>Password</label>
          </div>

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={validateInput}
            placeholder="Enter password"
            className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
   <span className="text-red-600">{formError.password}</span>
       
          <button
            onClick={submitForm}
            className="w-full bg-white hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 border border-black"
          >
            Submit
          </button>
          <p className="text-center">or</p>
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center w-full bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <FcGoogle className="mr-2" /> Sign In With Google
          </button>
          <NavLink to="/SignUp">
          <p className="text-center hover:text-blue-500">
            Dont have an account?
          </p>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
