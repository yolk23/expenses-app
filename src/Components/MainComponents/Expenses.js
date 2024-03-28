import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Expenses = () => {
  return (
    <div>
      <Navbar />
      <table class="border-collapse table-auto border border-black">
  <thead>
    <tr>
      <th>Date</th>
      <th>Category</th>
      <th>Description</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>test</tr>
  
  </tbody>
</table>
      <Footer />
    </div>
  );
};

export default Expenses;
