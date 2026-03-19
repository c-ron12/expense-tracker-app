import React from 'react'
import './Expenseitem';

function ExpenseDate(props) {
    const date = new Date(props.date);  // convert string to Date

    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    return (
        <div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
        </div>
    )
}

export default ExpenseDate;
 