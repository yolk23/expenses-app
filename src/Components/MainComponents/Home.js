import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Background from "../../Images/calculator-money-notepad-keyboard-yellow-background-flat-lay.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const [text, setText] = useState(0);

  const message = [
    "Manage your money now!",
    "Keep track of expenses",
    "Save better for the future!",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prev) => (prev < message.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className="relative">
      <Navbar />
      <img src={Background} alt="Expenses" className="w-full h-[70vh]" />
      <div className="flex justify-center items-centerborder  ">
        <p className="text-xl absolute top-[10%]  text-white  font-bold md:text-4xl">
          Manage Your Expenses Today!
        </p>
        <p className="text-sm absolute top-[15%] text-white   mx-4 md:text-md   md:w-3/5 lg:text-xl font-semibold mt-3 ">
          Mastering the art of expense management is pivotal for financial
          stability and success. By meticulously tracking expenditures and
          strategically allocating resources, individuals gain control over
          their finances, paving the path towards achieving their dreams and
          securing a prosperous future.
        </p>

        <button className="absolute top-[35%] justify-center py-2 px-4  bg-white hover:bg-green-600 text-black font-bold  rounded border border-black md:text-sm">
          Get Started
        </button>
      </div>
      <div className="flex h-[10vh]  bg-yellow-100 justify-center text-center items-center font-bold">
        <p>{message[text]}</p>
      </div>
      <div className="p-6 border  bg-white flex justify-center items-center">
        <div className="justify-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center h-auto mx-auto w-full">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-3">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Easy Managebility</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. aervaw
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-3">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Free to Use</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-3 ">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Secure</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
