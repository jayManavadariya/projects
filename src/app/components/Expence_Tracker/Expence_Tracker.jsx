import React from "react";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import {AppProvider} from './context/AppContext'

const Expence_Tracker = () => {
  return (
    <AppProvider>
    <div className="ml-2">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="flex gap-8">
        <div>
          <Budget />
        </div>
        <div>
          <Remaining />
        </div>
        <div>
          <ExpenseTotal />
        </div>
      </div>
      <h3 className="mt-3 ml-2">Expenses</h3>
      <div >
        <div>
          <ExpenseList />
        </div>
      </div>
      {/* <h3 className="mt-3 w-44 bg-green-500 text-black text-center">Add Expense</h3> */}
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
    </AppProvider>
  );
};

export default Expence_Tracker;
