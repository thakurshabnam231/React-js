
import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = ()=>{
    const[newItem,setNewItem]=useState();
    const TitleEventlistener=()=>{
        console.log(target.event.value)
    };
   const onSubmit=())=>{
       setNewItem()
console.log('submitted')
    }
    return(
        
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    
         <label>Title</label>
            <input type="text" onChange={TitleEventlistener}/>
            </div>

            <div className='new-expense__controls'>
                       <label>Amount</label>
            <input type="number" min= "0.01" step="0.01"/>
            </div>
              <div className='new-expense__controls'>
              
            <label>Date</label>
           <input type='date' min ='2018-06-09' max='2022-09-01'/>
           </div>
           
           <div className='new-expense__actions'>
               <button onClick={onSubmit}> add expense</button>
               
           </div>
           </div>
         </form>
    );
};
export default ExpenseForm;