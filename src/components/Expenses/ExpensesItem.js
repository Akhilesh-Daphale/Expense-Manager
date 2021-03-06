import React, { useState } from 'react';
import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";


function ExpensesItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHander = () => {
        setTitle("Updated");
    }

    return (
        // The class name of card and expense-tem is applied to Card compoenent which is a div
        <li>
            <Card className="expense-item">
                <ExpensesDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHander}>Change Title</button>
            </Card>
        </li>
    );
}


export default ExpensesItem;