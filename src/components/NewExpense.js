import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import react from 'react';
const NewExpense = () => {
    const addEventHandler = (expenseData)=>
    {
        const addExpenseData = {
            ...expenseData,
              id: Math.random().toString()
    };
       console.log(addExpenseData);
    };
    return(
    <div className="new-expense">
        <ExpenseForm onAddExpense={addEventHandler}/>
    </div>
    );
};
export default NewExpense;