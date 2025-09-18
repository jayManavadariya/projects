'use client'
import React, { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const {dispatch} = useContext(AppContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit= (e) =>{
        e.preventDefault()
        const event = {
            id: uuidv4(),
            name: text,
            cost: parseInt(amount)
        }
        dispatch ({
            type: 'Add_EXPENSE',
            payload: event,
        })
        // console.log("event", event);
        
        setText('')
        setAmount("")
    }

    return (
       <>
         <h3 className='bg-white w-40 text-black my-3'>Add new transaction</h3>
      <form onSubmit={handleSubmit} className='w-96'>
        <div className="form-control">
          <label htmlFor="text">Text:</label>
          <input className='ml-3' name='text' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required/>
        </div>
        <div className="flex mt-2">
          <label htmlFor="amount">Cost:</label>
          <input className='ml-2' type="text" name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required/>
        </div>
        <button className="bg-blue-400 px-2 rounded-2xl mt-2" type='submit'>Add transaction</button>
      </form>
       </>
    )
}

export default AddExpenseForm;