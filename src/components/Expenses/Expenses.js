import React, { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';


function Expenses(props) {

    const [yearFilter, setYearFilter] = useState("2019");
    
    const yearFilterSelectHandler = (year) => { 
        setYearFilter(year);
    }
    
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFilter;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={yearFilter} onYearFilterSelect={yearFilterSelectHandler} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;