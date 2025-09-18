'use client'
import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ExpenseContext } from '../context/ExpenseContext';

const Form = () => {

    const {dispatch} = useContext(ExpenseContext)

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {
            id: uuidv4(),
            name: name,
            amount: parseInt(amount),
            category: category
        }
        // console.log("event", event);
        
        dispatch({
            type: "Add",
            payload: event
        })
        setAmount("")
        setName("")
        setCategory("")
    }

return (
  <div className="p-4 bg-white shadow-md rounded-xl">
    <h3 className="text-lg font-bold mb-3 border-b pb-2">
      Add New Transaction
    </h3>

    <form onSubmit={handleSubmit} className="space-y-3 ">
      <div className="flex flex-col">
        <label className="font-medium mb-1">Text</label>
        <input
          className="border rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter text..."
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium mb-1">Cost</label>
        <input
          className="border rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium mb-1">Category</label>
        <input
          className="border rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category..."
          required
        />
      </div>
    
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition "
        type="submit"
      >
        Add Transaction
      </button>
    </form>
  </div>
);

}

export default Form