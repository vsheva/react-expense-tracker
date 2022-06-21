import React from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = prop => {

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData, //that object, generated in submitHandler
      id: Math.random().toString(),
    };

    prop.onAddExpense(expenseData); //вызываем верхний addExpenseHandler(expenses) c нашим expenseData из App.js
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
