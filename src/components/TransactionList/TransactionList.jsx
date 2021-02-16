import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Transaction } from '../index';
import { deleteTransaction } from '../../redux/actionCreators';
import style from './TransactionList.module.css';

const TransactionList = () => {
    const dispatch = useDispatch();

    const onTransactionDelete = (id) => {
        dispatch(deleteTransaction(id));
    };

    const { transactions } = useSelector((state) => state.app);
    const transactionElements = transactions.map(transaction => {
        return (
            <Transaction key={transaction.id}
                         id={transaction.id}
                         text={transaction.text}
                         amount={transaction.amount}
                         deleteTransaction={onTransactionDelete}
            />
        );
    });

    return (
        <div className={style['transactionList__container']}>
            <h4 className={style['transactionList__heading']}>History</h4>
            <ul className={style['transactionList__list']}>
                {transactionElements}
            </ul>
        </div>
    );
};

export default TransactionList;