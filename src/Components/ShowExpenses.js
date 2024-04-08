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
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    getExpenseList();
    const getTotalExpenses = async () => {
      const userData = expenseList.filter((obj) =>
        obj?.userId?.includes(auth?.currentUser?.uid)
      );
      const amounts = userData
        .filter((obj) => obj?.type?.includes("Income"))
        .map((obj) => Number(obj.amount));
      const total = amounts.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );

      setTotalExpense(total);
    };

    getTotalExpenses();
  }, []);

  const getExpenseList = async () => {
    const data = await getDocs(expenseCollectionsRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    try {
      setExpenseList(filteredData);
      console.log("Filtered Data", filteredData);
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <AddExpense
        getExpenseList={getExpenseList}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <button
        className=" bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Add Expense
      </button>

      <div className="flex justify-center m-6 overflow-auto ">
        <table class="border-separate p-10 border border-black-600 rounded-lg bg-white ">
          <thead className="border border-black">
            <tr className="text-left   ">
              <th className="border-b border-black-600">Type</th>
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
                  <td className="bg-white ">
                    <input
                      value={expense.type}
                      name="type"
                      className={`my-2 ${
                        expense.type.includes("Income")
                          ? "text-green-300"
                          : "text-red-300"
                      } `}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="bg-white ">
                    <input
                      value={new Date(expense.date.seconds * 1000)
                        .toISOString()
                        .substring(0, 10)}
                      name="date"
                      className="my-2"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      value={expense.category}
                      name="category"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      value={expense.amount}
                      name="amount"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      value={expense.description}
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
          </tbody>
        </table>
      </div>
      <div className="flex justify-center m-6 overflow-auto ">
        <table class="w-3/5 border-separate p-10 border border-black-600 rounded-lg bg-white ">
          <thead className="border border-black">
            <tr className="text-left   ">
              <th className="border-b border-black-600">Overall</th>
              <th className="border-b border-black-600">Amount</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="my-2">
              Total Expense:
              {totalExpense ? <>{totalExpense}</> : null}
            </tr>
            <tr className="my-2">Total Income:</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowExpenses;
