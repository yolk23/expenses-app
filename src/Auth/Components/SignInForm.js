import React from "react";
import { useState, useEffect } from "react";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../../Utils/firebase";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitFormValues, setSubmitFormValue] = useState({});

  useEffect(() => {
    console.log(submitFormValues);
  }, [submitFormValues]);
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      console.log(auth?.currentUser);
    } catch (err) {
      console.error(err);
    }
    setSubmitFormValue(form);
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="container mx-auto max-w-lg bg-white rounded-lg p-8 border border-gray-800">
        <h1 className="text-4xl text font-bold mb-5">Welcome!</h1>
        <p className="text-md text-gray-500 mb-5">Please enter your details.</p>
        <form className="border border-gray-800 rounded-lg p-8 space-y-4 min-h-[30rem]">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Enter e-mail"
            className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 mb-3"
          />
          <div>
            <label>Password</label>
          </div>

          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />

          <div>
            <label>Confirm Password</label>
          </div>

          <input
            type="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm Password"
            className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
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
          <p className="text-center hover:text-blue-500">
            Already have an account?
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
