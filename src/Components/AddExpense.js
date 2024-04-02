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
      console.error(err);
    }
  };

  return (
    <div>
      <h1>{auth?.currentUser?.uid}</h1>
      <form>
        <input placeholder="date" name="date" onChange={handleChange} />
        <input placeholder="category" name="category" onChange={handleChange} />
        <input
          placeholder="amount"
          type="number"
          name="amount"
          onChange={handleChange}
        />
        <input
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <button onClick={submitExpense}>Submit Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
