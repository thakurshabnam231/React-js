import React from react;
import ExpenseForm from './ExpenseForm';
import '.NewExpense.css';
import react from 'react';
const NewExpense = () => {
    return(<div className="new-expense">
        <ExpenseForm/>
    </div>
    );
};
export default NewExpense;