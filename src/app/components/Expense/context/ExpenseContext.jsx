'use client'
import { createContext, useReducer } from "react";

const ExpenseReuder = (state,action) => {
    switch(action.type){
        case "Add":
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        case "Delete":
            return  {
                ...state,
                expenses: state.expenses.filter((e) => e.id !== action.payload)
            }
        default:
            return state
    }
}

const initialState = {
    expenses: []
}

export const ExpenseContext = createContext()

export const ExpenseProvider = (props) => {
    const [state, dispatch] = useReducer(ExpenseReuder, initialState)

    return (
        <ExpenseContext value={{expenses : state.expenses, dispatch}}>
            {props.children}
        </ExpenseContext>
    )
}