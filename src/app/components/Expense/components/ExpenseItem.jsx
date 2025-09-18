"use client";
import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseItem = () => {
  const { expenses, dispatch } = useContext(ExpenseContext);
//   console.log("expensese",expenses);

  const handleDelete = (id) => () => {
    // console.log("Data", id);
    
    dispatch({
      type: "Delete",
      payload: id,
    });
  };

return (
  <div className="my-4 p-4 bg-white shadow-md rounded-xl">
    <h1 className="text-xl font-bold mb-3 text-gray-600">History</h1>
    <ul className="space-y-2">
      {expenses.map((data, id) => (
        <li
          key={id}
          className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg shadow-sm"
        >
          <span className="font-medium text-gray-700">{data.name}</span>
          <div className="flex items-center gap-3">
            <span className="text-green-600 font-semibold">₹{data.amount}</span>
            <span className="text-sm text-gray-500">{data.category}</span>
            <TiDelete
              size="1.3em"
              className="cursor-pointer text-red-500 hover:text-red-700"
              onClick={handleDelete(data.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

};

export default ExpenseItem;
