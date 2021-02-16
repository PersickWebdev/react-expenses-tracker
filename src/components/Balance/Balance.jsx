import React from 'react';
import { useSelector } from 'react-redux';
import style from './Balance.module.css';

const Balance = () => {
    const { transactions } = useSelector((state) => state.app);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((sum, item) => (sum += item), 0).toFixed(2);

    return (
        <div className={style['balance__container']}>
            <h4 className={style['balance__heading']}>Your balance</h4>
            <span className={style['balance__figures']}>${total}</span>
        </div>
    );
};

export default Balance;