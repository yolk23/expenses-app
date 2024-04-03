import React from "react";
import { db, auth } from "../Utils/firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AddExpense = (props) => {
  const expenseCollectionsRef = collection(db, "expenses");
  const [expenseForm, setExpenseForm] = useState({
    date: "",
    category: "",
    amount: 0,
    description: "",
    userId: auth?.currentUser?.uid,
  });

  const handleChange = (e) => {
    setExpenseForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(expenseForm);
  };

  const submitExpense = async (e) => {
    try {
      e.preventDefault();
      await addDoc(expenseCollectionsRef, expenseForm);
      props.getExpenseList();
      toast.success("Expense Added", {
        position: "top-center",
      });
    } catch (err) {
      toast.error(`Error`, {
        position: "top-center",
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        props.isOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded shadow-lg z-50">
        <div className="border border-black rounded-md">
          <button onClick={props.onClose}>&times;</button>
          <h1 className="m-3">Input your Expense</h1>
          <form>
            <select name="type" onChange={handleChange} required>
              <option>Select a category</option>
              <optgroup label="Categories of Income">
                <option value="Earned Income">Earned Income</option>
                <option value="Investment Income">Investment Income</option>
                <option value="Business Income">Business Income</option>
                <option value="Passive Income">Passive Income</option>
                <option value="Other Income">Other Income</option>
              </optgroup>
              <optgroup label="Categories of Expenses">
                <option value="Fixed Expenses">Fixed Expenses</option>
                <option value="Variable Expenses">Variable Expenses</option>
                <option value="Debt Payments">Debt Payments</option>
                <option value="Operating Expenses">Operating Expenses</option>
                <option value="Capital Expenses">Capital Expenses</option>
                <option value="Discretionary Expenses">
                  Discretionary Expenses
                </option>
              </optgroup>
            </select>
            <input
              placeholder="date"
              name="date"
              className="m-3"
              onChange={handleChange}
              reqired
            />
            <input
              placeholder="category"
              name="category"
              onChange={handleChange}
              required
            />
            <input
              placeholder="amount"
              type="number"
              name="amount"
              onChange={handleChange}
              required
            />
            <input
              placeholder="description"
              name="description"
              onChange={handleChange}
              required
            />
            <button onClick={submitExpense}>Submit Expense</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
