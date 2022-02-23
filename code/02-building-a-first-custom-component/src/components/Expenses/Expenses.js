
import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [filterData, setFilterData] = useState({
        year: '2020'
    });

    const filterChangedHandler = (filterValue) => {
        setFilterData((prevState) => {
            const filterData = {
                ...prevState,
                ...filterValue
            };
            return filterData;
        })
    }

    return (
        <div>
            <ExpensesFilter onFilterChanged={filterChangedHandler} selected={filterData}></ExpensesFilter>
            <Card className="expenses">
                {props.items.filter(i => filterData.year ? i.date.getFullYear() == filterData.year : true).map((item, i) => (
                    <ExpenseItem key={i}
                        title={item.title}
                        date={item.date}
                        amount={item.amount}>
                    </ExpenseItem>))
                }
            </Card>
        </div>
    );
}
export default Expenses;