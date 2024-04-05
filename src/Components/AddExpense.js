import React, { useEffect } from "react";
import { db, auth } from "../Utils/firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AddExpense = (props) => {
  const expenseCollectionsRef = collection(db, "expenses");
  const [expenseForm, setExpenseForm] = useState({
    type: "",
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
  };

  function allKeysHaveValue(obj) {
    for (let key in obj) {
      if (!obj[key]) {
        return false;
      }
    }
    return true;
  }

  const submitExpense = async (e) => {
    e.preventDefault();
    try {
      if (allKeysHaveValue(expenseForm)) {
        await addDoc(expenseCollectionsRef, expenseForm);
        toast.success("Expense Added", {
          position: "top-center",
        });
      } else {
        toast.error("incomplete Form", {
          position: "top-center",
        });
      }

      props.getExpenseList();
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
        <div className=" rounded-md">
          <button onClick={props.onClose} className="text-left">
            &times;
          </button>
          <h1 className="my-2">Input your Expense</h1>
          <form className="w-96">
            <div>
              <label>Type</label>
            </div>
            <select
              name="type"
              onChange={handleChange}
              required
              className="my-2 border border-gray-500 rounded-md"
            >
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
            <div>
              <label>Date</label>
            </div>
            <input
              placeholder="date"
              name="date"
              className="my-2 border border-gray-500 rounded-md w-full"
              onChange={handleChange}
              reqired
            />
            <div>
              <label>Category</label>
            </div>
            <input
              placeholder="category"
              name="category"
              className="my-2 border border-gray-500 rounded-md"
              onChange={handleChange}
              required
            />
            <div>
              <label>amount</label>
            </div>
            <input
              placeholder="amount"
              type="number"
              className="my-2 border border-gray-500 rounded-md"
              name="amount"
              onChange={handleChange}
              required
            />
            <div>
              <label>Description</label>
            </div>
            <input
              placeholder="description"
              name="description"
              className="my-2 border border-gray-500 rounded-md "
              onChange={handleChange}
              required
            />
            <div>
              <button onClick={submitExpense}>Submit Expense</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
