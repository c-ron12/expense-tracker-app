// this file is parent of Expensitem.js
import React from 'react'
import './Expenses.css';
import Expenseitem from './Expenseitem';   // Child of Expenses.js 
import Card from '../UI/Card';

function Expenses(props) {   // props here is an object which store a data coming from the parent file to this child component file  
    
    return (
        <Card className= "expenses">
            {
                props.item.map(      // using a loop map function to get a data from the app.js and the form
                    expense => (
                        <Expenseitem  key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} /> 
                    )
                )
            }
           {/* <Expenseitem date={props.item[0].date} title={props.item[0].title} amount={props.item[0].amount} />   {/* this Expenseitem is child of Expens.js file 
            <Expenseitem date={props.item[1].date} title={props.item[1].title} amount={props.item[1].amount} />
            <Expenseitem date={props.item[2].date} title={props.item[2].title} amount={props.item[2].amount} />
            <Expenseitem date={props.item[3].date} title={props.item[3].title} amount={props.item[3].amount} /> */}

        </Card>
    )
}   

export default Expenses;