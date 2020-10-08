import React from "react";
import style from './Transaction.module.css';

const Transaction = (props) => {
    return (
        <li className={props.amount > 0 ? style.transaction__container_plus : style.transaction__container_minus}>
            <button className={style.transaction__button}
                    onClick={() => props.deleteTransaction(props.id)}>&times;</button>
            <span>{props.text}</span>
            <span>{props.amount}$</span>
        </li>
    );
}

export default Transaction;