import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ShowExpenses from "../ShowExpenses";
import PrivateContext from "../../Auth/Context/PrivateContext";

const Expenses = () => {
  return (
    <div>
      <PrivateContext>
        <Navbar />
        <ShowExpenses />
        <Footer />
      </PrivateContext>
    </div>
  );
};

export default Expenses;
