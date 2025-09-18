import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext)

    const handleDelete = () => {
        dispatch({
            type: 'Delete_Expense',
            payload: props.id
        })
    }
  return (
    <div className='w-xl'>
    <li className='flex items-center justify-start'>
        {props.name}
        <div className='flex justify-end ml-3'>
            <span className=''>
                    £{props.cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDelete}/>
        </div>
    </li>
    </div>
  )
}

export default ExpenseItem