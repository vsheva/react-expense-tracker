import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = prop => {
  const [isEditing, setIdEditing]=useState(false)
  const startEditingHandler=()=>{
    setIdEditing(true)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //that object, generated in submitHandler
      id: Math.random().toString(),
    };

    prop.onAddExpense(expenseData); //вызываем верхний addExpenseHandler(expenses) c нашим expenseData из App.js
    setIdEditing(false)
  };

  const stopEditingHandler=()=>{
    setIdEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}

    </div>
  );
};

export default NewExpense;


//{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}