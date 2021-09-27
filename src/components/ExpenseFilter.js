import React from 'react';
import './ExpenseFilter.css'

const ExpenseFilter=() => {
    return (
        <div classNamee="expenses-filter">
            <div className="expenses-filter__control">
            <h1>Filter items</h1>
<select >

<option value='2018'>2018</option>
<option value='2019'>2019</option>
<option value ='2020'>2020</option>
<option value='2021'>2021</option>
</select>
          </div> 
        </div>
    )
}

export default ExpenseFilter
