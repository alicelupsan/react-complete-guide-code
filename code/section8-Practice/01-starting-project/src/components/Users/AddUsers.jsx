import { useState, React } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUsers.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import { toBeInTheDOM } from '@testing-library/jest-dom';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age"
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)"
            });
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
    const onCloseErrorModal = () => {
        setError(null);
    };

    return (
        <React.Fragment> 
            {error && <ErrorModal title={error.title} message={error.message} onClose={onCloseErrorModal}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="userame">Username</label>
                    <input id="username" type="text" onChange={userNameChangeHandler} value={enteredUserName} />
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}
export default AddUser;