import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }

    return <ul className="expenses-list">
        {props.items.map((item, i) => (
            <ExpenseItem key={i}
                title={item.title}
                date={item.date}
                amount={item.amount}>
            </ExpenseItem>))}
    </ul>;
};

export default ExpensesList;