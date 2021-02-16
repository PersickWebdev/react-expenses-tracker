import React from 'react';
import style from './Transaction.module.css';

const Transaction = ({ id, text, amount, deleteTransaction }) => {
    return (
        <li className={amount > 0 ? style['transaction__container_plus'] : style['transaction__container_minus']}>
            <button className={style['transaction__button']}
                    onClick={() => deleteTransaction(id)}>&times;</button>
            <span>{text}</span>
            <span>{amount}$</span>
        </li>
    );
}

export default Transaction;