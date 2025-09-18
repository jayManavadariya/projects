import React from 'react'
import Form from './components/Form'
import ExpenseItem from './components/ExpenseItem'
import TotalExpense from './components/TotalExpense'
import { ExpenseProvider } from './context/ExpenseContext'
import Category from './components/Category'

const ExpenseMain = () => {
  return (
    <ExpenseProvider>
      <div className="min-h-screen bg-gray-200 py-10">
        <div className="max-w-3xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Expense Tracker
          </h1>

          {/* Total Expense */}
          <div className="mb-6">
            <TotalExpense />
          </div>

          {/* Two-column layout: Category + Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-gray-600">
            <Category />
            <Form />
          </div>

          {/* Expense History */}
          <ExpenseItem  />
        </div>
      </div>
    </ExpenseProvider>
  )
}

export default ExpenseMain
