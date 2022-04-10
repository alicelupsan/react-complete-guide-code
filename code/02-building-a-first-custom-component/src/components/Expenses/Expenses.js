
import React, { useState } from 'react';
import './Expenses.css';
import Card from "./../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filterData, setFilterData] = useState({
        year: new Date().getFullYear().toString()
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

    const filteredExpenses = props.items.filter(i => filterData.year ? i.date.getFullYear().toString() === filterData.year : true);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChanged={filterChangedHandler} selected={filterData}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div>
    );
}
export default Expenses;