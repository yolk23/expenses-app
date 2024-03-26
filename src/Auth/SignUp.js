import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SignUpForm from "./Components/SignUpForm";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default SignUp;
