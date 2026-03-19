import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {    // writing this props for sending this child file data to the parent file App.js

  const saveExpenseDataHandler = (enteredExpenseData) => {  //enteredExpenseData used as porps to catch a data from childfile ExpenseForm.js
    const ExpenseData = {
      ...enteredExpenseData,   // enteredExpenseData used as spread operator stores a data from is child fie ExpenseForm.js is 
      id: Math.random().toString()      // giving random id to the received data
    }

    props.onAddExpense(ExpenseData);

    console.log(enteredExpenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm  onSaveExpenseData= {saveExpenseDataHandler} /> 
    </div>
  )
}

export default NewExpense