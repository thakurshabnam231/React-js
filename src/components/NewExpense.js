import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const ExpenseData = (expenseData)=>
    {
        const data = {
            ...expenseData,
             
    };
       props.addExpense(data);
    };
    return(
    <div className="new-expense">
        <ExpenseForm onAddForm={ExpenseData}/>
    </div>
    );
};
export default NewExpense;