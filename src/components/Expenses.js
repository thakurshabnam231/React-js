import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((expenses)=> {
       return <ExpenseItem
        title={expenses.title}
        amount={expenses.amount}
          
        />
      })}
       </div>
  );
};

export default Expenses;