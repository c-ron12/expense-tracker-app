import React from 'react'
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;    // card keyword is below className and wrote props.className to get the className of the original div tag which is expense-item wrote in Expenseitem.js(card component)
  return (
    <div className= {classes}>{props.children}</div>   // for rendering the card component inside component and html
  )
}

export default Card;