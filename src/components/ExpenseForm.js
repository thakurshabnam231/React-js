
import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {

    const [title, setTitle] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
   
    const TitleEventlistener = (event) => {
        setTitle(event.target.value)
    };

    const AmountEventlistener = (event) => {
        setAmount(event.target.value
        )
    };
    const DateEventlistener = (event) => {

        setDate(event.target.value)
    };

  const onSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
        enteredTitle:title,
        enteredAmount:amount,
        enteredDate:date,
        };
        props.onAddExpense();
  
    setTitle('');
    setAmount('');
    setDate('');
};
    return (

        <form  onClick={onSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>

                    <label>Title</label>
                    <input type="text" value={title} onChange={TitleEventlistener} />
                </div>

                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  value={amount}onChange={AmountEventlistener} />
                </div>
                <div className='new-expense__controls'>

                    <label>Date</label>
                    <input type='date' min='2018-06-09' max='2022-09-01' value={date} onChange={DateEventlistener} />
                </div>

                <div className='new-expense__actions'>
                    <button type='submit'> add expense</button>

                </div>
            </div>
        </form>
    );
};
export default ExpenseForm;