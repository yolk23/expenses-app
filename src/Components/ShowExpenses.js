import React from "react";
import { db, auth } from "../Utils/firebase";
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import AddExpense from "./AddExpense";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowExpenses = () => {
  const [expenseList, setExpenseList] = useState([]);

  const expenseCollectionsRef = collection(db, "expenses");

  const [updatedExpenseForm, setUpdatedExpenseForm] = useState();

  useEffect(() => {
    getExpenseList();
  }, []);

  const getExpenseList = async () => {
    const data = await getDocs(expenseCollectionsRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    try {
      setExpenseList(filteredData);
      console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteExpense = async (id) => {
    const expenseDoc = doc(db, "expenses", id);
    try {
      await deleteDoc(expenseDoc);
      getExpenseList();
      toast.error("Deleted Expense", {
        position: "top-center",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setUpdatedExpenseForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(updatedExpenseForm);
  };

  const updateExpense = async (id) => {
    const expenseDoc = doc(db, "expenses", id);
    try {
      await updateDoc(expenseDoc, updatedExpenseForm);
      await getExpenseList();
      toast.success("Updated", {
        position: "top-center",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <AddExpense getExpenseList={getExpenseList} />
      <h1>{auth?.currentUser?.uid}</h1>
      <div className="flex justify-center m-6 ">
        <table class="w-4/5  border-separate p-10 border border-black-600 rounded-lg bg-white">
          <thead className="border border-black">
            <tr className="text-left   ">
              <th className="border-b border-black-600">Date</th>
              <th className="border-b border-black-600">Category</th>
              <th className="border-b border-black-600">Amount</th>
              <th className="border-b border-black-600">Description</th>
              <th className="border-b border-black-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenseList
              .filter((obj) => obj?.userId?.includes(auth?.currentUser?.uid))

              .map((expense, i) => (
                <tr key={i} className="border border-black">
                  {" "}
                  <td className="bg-white ">
                    <input
                      defaultValue={expense.date}
                      name="date"
                      className="my-2"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      defaultValue={expense.category}
                      name="category"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      defaultValue={expense.amount}
                      name="amount"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      defaultValue={expense.description}
                      name="description"
                      onChange={handleChange}
                    />
                  </td>
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="bg-red-600 w-20 rounded-md my-3"
                  >
                    Delete
                  </button>
                  {/* <button onClick={() => updateExpense(expense.id)}>
                    Edit
                  </button> */}
                </tr>
              ))}
            <button></button>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowExpenses;
