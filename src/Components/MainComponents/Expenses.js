import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ShowExpenses from "../ShowExpenses";
import { ToastContainer } from "react-toastify";

const Expenses = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <ShowExpenses />
      <Footer />
    </div>
  );
};

export default Expenses;
