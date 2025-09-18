'use client'
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
const Category = () => {
      const { expenses } = useContext(ExpenseContext)
    
      const spedingPerCategory = expenses.reduce((acc, e) => {
        if(!acc[e.category]){
            acc[e.category] = 0
        }
        acc[e.category] += e.amount
        return acc
      }, {})
      
    let highestSpendingCategory = 'N/A';
    let maxSpend = 0; 
    for(const category in spedingPerCategory){
        if(spedingPerCategory[category] > maxSpend){
            maxSpend = spedingPerCategory[category]
            highestSpendingCategory = category
        }
    }
      
return (
  <div className="p-4 bg-white shadow-md rounded-xl">
    <h3 className="text-xl font-bold mb-4 border-b pb-2">Spending Summary</h3>

    <div className="mb-4">
      <h4 className="font-medium mb-2">Spent per category:</h4>
      <ul className="list-disc list-inside text-gray-600">
        {Object.entries(spedingPerCategory).length === 0
          ? "N/A"
          : Object.entries(spedingPerCategory).map(([category, totalCost]) => (
              <li key={category} className="mb-1">
                <span className="font-semibold">{category}</span>: ₹{totalCost}
              </li>
            ))}
      </ul>
    </div>

    <div className="bg-gray-100 p-3 rounded-md">
      <h4 className="font-semibold">Highest spending category:</h4>
      <p className="text-gray-700">
        {highestSpendingCategory}: with a total of{" "}
        <span className="text-red-500 font-bold">₹{maxSpend}</span>
      </p>
    </div>
  </div>
);

};

export default Category;
