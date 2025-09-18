'use client'
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alert = totalExpenses > budget ? "Out of budget" : "In the budget";
  return (
    <div className={`alert ${alert}`}>
      <span>Remaining: {budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
