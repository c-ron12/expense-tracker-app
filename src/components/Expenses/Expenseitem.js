// this file is child of Expenses.js
import './Expenseitem.css';   
// import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';     // this line file is child of Expenseitem.js  
import Card from '../UI/Card'; 

function Expenseitem(props) {  // props here is an object which store a data coming from the parent file to this child component file  

    // const [newTitle, setNewTitle] = useState("");
    
    // const [title, setTitle] = useState(props.title);  // useState(props.title) is function that returns a value that is variable and function and they are title and setTitle. Here title is variable and setTitle is function that is changing the value of title variable 

    // const clickHandler = () => {
    //     setTitle(newTitle);  

    //     // Doing by using Plain JS without using react Hook State
    //     const titleElement = document.getElementById(`expense-title-${props.id}`);
    //     if (titleElement) {
    //         titleElement.textContent = 'New Title';
    //     }
    // }

    // const changeHandler = (event) => {
    //     setNewTitle(event.target.value)
    // }

    return (
        // <Card className='expense-item'>
        //     <ExpenseDate date= {props.date} />

        //     <div className ="expense-item__description">
        //        <h3>{ title }</h3>   {/* title here is a variable being passed from useState Array */}

        //        {/* <h3 id={`expense-title-${props.id}`}>{props.title}</h3> */}     {/* Doing without using react state, doing it by plain JS  */}

        //        <div className="expense-item__price">{props.amount}</div>
        //     </div>
        //     <input type = "text" value= {newTitle} onChange= { changeHandler }/>
        //     <button onClick={ clickHandler }>Change Title</button> 
        // </Card>  

        <Card className='expense-item'>
            <ExpenseDate date= {props.date} />
 
            <div className ="expense-item__description">
               <h3>{ props.title }</h3>  
               <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>  
    )
}

export default Expenseitem;