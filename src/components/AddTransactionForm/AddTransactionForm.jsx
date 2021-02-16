import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../redux/actionCreators';
import style from './AddTransactionForm.module.css';

const AddTransactionForm = () => {
    const dispatch = useDispatch();
    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let newTransaction = {
            id: Date.now(),
            text: text,
            amount: parseInt(amount)
        }
        dispatch(addTransaction(newTransaction));
        setText('');
        setAmount(0);
    }

    return (
        <div className={style['addTransaction__container']}>
            <h4 className={style['addTransaction__heading']}>Add new transaction</h4>
            <form className={style['form__container']} onSubmit={onSubmitHandler}>
                <div className={style['form__formControl']}>
                    <label htmlFor="text">Text</label>
                    <input type="text"
                           placeholder='Enter transaction title ...'
                           value={text}
                           onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <div className={style['form__formControl']}>
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number"
                           placeholder='Enter amount ...'
                           value={amount}
                           onChange={(event) => setAmount(event.target.value)}
                    />
                </div>
                <button className={style['form__button']} type='submit'>Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransactionForm;