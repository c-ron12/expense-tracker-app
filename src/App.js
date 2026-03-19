// This App.js is the parent file 
import React, { useState, useEffect, use } from 'react';
import Expenses from './components/Expenses/Expenses';    // Expenses is child file in here App.js
import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [
  // {
  //   id: 'e1',
  //   title: 'School Fee',
  //   amount: 2500,
  //   date: new Date(2025, 5, 12)
  // },

  // {
  //   id: 'e2',
  //   title: 'Car Insurance',
  //   amount: 5000,
  //   date: new Date(2025, 5, 23)
  // },

  // {
  //   id: 'e3',
  //   title: 'Tutuion Fee',
  //   amount: 2000,
  //   date: new Date(2025, 2, 1)
  // },

  // {
  //   id: 'e4',
  //   title: 'Transportation',
  //   amount: 3000,
  //   date: new Date(2025, 4, 12)
  // },

]

function App() {
  // let expenses = [
  //   {
  //     id: 'e1',
  //     title: 'School Fee',
  //     amount: 2500,
  //     date: new Date(2025, 5, 12)
  //   },

  //   {
  //     id: 'e2',
  //     title: 'Car Insurance',
  //     amount: 5000,
  //     date: new Date(2025, 5, 23)
  //   },

  //   {
  //     id: 'e3',
  //     title: 'Tutuion Fee',
  //     amount: 2000,
  //     date: new Date(2025, 2, 1)
  //   },

  //   {
  //     id: 'e4',
  //     title: 'Transportation',
  //     amount: 3000,
  //     date: new Date(2025, 4, 12)
  //   },

  // ]
  const [expenses, setExpneses] = useState(DUMMY_EXPENSE);
  
  useEffect(() => {
    fetch('http://localhost/sample-api/api/read.php').then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        console.log(data);     
        setExpneses(data);
      }
    );
  }, []);


  const addExpenseHandler = (expense) => {
    console.log(expense);

    const updatedExpnese = [expense, ...expenses];   // new dynamic data comes to expense variable and old above DUMMY_EXPENSE data gets store in ...expenses
    setExpneses(updatedExpnese);
  }
  return (
    <div className='appContainer'>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Expense Tracker</h2>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />  {/*  including child file here, Expenses.js is child file here */}

    </div>
  )
}

export default App;