import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Background from "../../Images/calculator-money-notepad-keyboard-yellow-background-flat-lay.jpg"

const Home = () => {
  return (
<div className="relative">
  <Navbar />
  <img src={Background} alt="Expenses" className="w-full h-[70vh]" />
  <div className="flex">
    <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold mt-5">Manage Your Expenses Today!</p>
    <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white text-lg font-semibold mt-3">Mastering the art of expense management is pivotal for financial stability and success. By meticulously tracking expenditures and strategically allocating resources, individuals gain control over their finances, paving the path towards achieving their dreams and securing a prosperous future.</p>
    <button className="absolute top-2/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white hover:bg-green-600 text-black font-bold py-2 px-4 rounded border border-black">Get Started</button>
  </div>
  <div className="h-[10vh] border border-black bg-white justify-center text-center" >
  <div class="grid grid-cols-4">
    <div className="border border-black bg-white flex justify-center items-center h-10">01</div>
    <div >01</div>
    <div >01</div>
    <div >01</div>
  </div>
  </div>
  <Footer />
</div>

  

  );
};

export default Home;
