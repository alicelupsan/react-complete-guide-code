
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card"
const Expenses = (props) => {
    return(
        <Card className="expenses">
            {props.items.map((item, i) => (
            <ExpenseItem key={i}
                title={item.title}
                date={item.date}
                amount={item.amount}>
            </ExpenseItem>))
            }
        </Card>
    );
}
export default Expenses;