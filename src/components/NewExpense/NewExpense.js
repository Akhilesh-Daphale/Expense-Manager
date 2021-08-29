import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';


function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseData = (expenseData) => {
        const updatedExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(updatedExpenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const StopEditingHandler = () => {
        setIsEditing(false);
    } 

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={StopEditingHandler} />}
        </div>
    );
}


export default NewExpense;