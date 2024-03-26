import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SignInForm from "./Components/SignInForm";

const SignIn = () => {
  return (
    <div>
      <Navbar/>
      <SignInForm/>
      <Footer/>
    </div>
  );
};

export default SignIn;
