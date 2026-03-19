import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // wrote props for taking this data to its parent component NewExpense.js
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("Rs"); // Default currency

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const currencyChangeHandler = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let expenseData = {
      title: enteredTitle,
      amount: `${selectedCurrency} ${enteredAmount}`, // Store currency with amount
      amountValue: parseFloat(enteredAmount), // Store numeric value separately if needed
      currency: selectedCurrency,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    console.log(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // Optionally reset currency or keep it as is
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div
          className="new-expense__control"
          style={{ display: "flex", gap: "10px" }}
        >
          <div style={{ flex: 1 }}>
            <label for="currency-select">Currency</label>
            <select
              id="currency-select"
              value={selectedCurrency}
              onChange={currencyChangeHandler}
              style={{ width: "100%", padding: "8px" }}
            >
              <option value="Rs">Rs (₹)</option>
              <option value="$">USD ($)</option>
              <option value="€">Euro (€)</option>
              <option value="£">GBP (£)</option>
              <option value="¥">JPY (¥)</option>
            </select>
          </div>

          <div style={{ flex: 2 }}>
            <label for="amount-input">Amount</label>
            <input id="amount-input"
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
              placeholder={selectedCurrency}
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} value={enteredDate} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
