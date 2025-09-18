'use client'
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
const Category = () => {
      const { expenses } = useContext(ExpenseContext)
      // 1. Spent per category
    const spendingPerCategory = expenses.reduce((acc, expense) => {
        if (!acc[expense.category]) {
            acc[expense.category] = 0;
        }
        acc[expense.category] += expense.cost;
        return acc;
    }, {});

    // 2. Highest spending category
    let highestSpendingCategory = 'N/A';
    let maxSpend = 0;
    for (const category in spendingPerCategory) {
        if (spendingPerCategory[category] > maxSpend) {
            maxSpend = spendingPerCategory[category];
            highestSpendingCategory = category;
        }
    }
   return (
        <div className="bg-gray-500 p-4 rounded-md shadow-md mt-4">
            <h3 className="text-lg font-bold mb-2">Spending Summary</h3>
            
            <div className="mb-4">
                <h4 className="font-semibold">Spent per category:</h4>
                <ul className="list-disc list-inside">
                    {Object.entries(spendingPerCategory).map(([category, totalCost]) => (
                        <li key={category}>
                            **{category}**: £{totalCost}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-semibold">Highest spending category:</h4>
                <p>
                    **{highestSpendingCategory}** with a total of £{maxSpend}
                </p>
            </div>
        </div>
    );
};

export default Category;
