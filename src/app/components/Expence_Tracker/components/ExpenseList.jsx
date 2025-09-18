'use client'
import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {

    const {expenses} = useContext(AppContext)
    console.log(expenses);
    
  return (
    <div>
    <ul>
        {expenses.map((data, id) => (
            <ExpenseItem key={id} id={data.id} name={data.name} cost={data.cost}/>
        ))}</ul>
        </div>
  )
}

export default ExpenseList