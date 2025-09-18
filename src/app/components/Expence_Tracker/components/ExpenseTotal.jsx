'use client'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
    const {expenses} = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    },0)
  return (
    <div>spend so far: {totalExpenses}</div>
  )
}

export default ExpenseTotal