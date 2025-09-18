'use client'
import React, { useContext } from 'react'
import { ExpenseContext } from "../context/ExpenseContext";

const TotalExpense = () => {
  const { expenses } = useContext(ExpenseContext);
    const amounts = expenses.map(transaction => transaction.amount);

    const totalExpenses = amounts.reduce((total, item) => (total += item),0)
    
return (
  <div className="p-4 bg-white shadow-md rounded-xl text-lg font-semibold text-gray-700">
    Total Expense: <span className="text-red-500">₹{totalExpenses}</span>
  </div>
);

}

export default TotalExpense