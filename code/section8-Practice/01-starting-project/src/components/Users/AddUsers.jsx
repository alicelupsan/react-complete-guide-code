import { useState, React } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUsers.module.css';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge < 1) {
            return;
        }
        props.addUser(enteredAge, enteredUserName);

        setEnteredUserName('');
        setEnteredAge('');

    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };


    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="userame">Username</label>
                <input id="username" type="text" onChange={userNameChangeHandler} value={enteredUserName} />
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}
export default AddUser;