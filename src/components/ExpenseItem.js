import React ,{useState} from 'react';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const[title,setTitle] = useState(props.title);
  console.log('ExpensesItem evaluated by react');
  const clickHandler=()=>{
    setTitle('updated');
    console.log(title);
  }
 
  return (
    <Card className='expense-item'>
     
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};

export default ExpenseItem;