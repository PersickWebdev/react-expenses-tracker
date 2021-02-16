import React from 'react';
import { useSelector } from 'react-redux';
import style from './IncomeExpense.module.css';

const IncomeExpense = () => {
    const { transactions } = useSelector((state) => state.app);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((sum, item) => (sum += item), 0)
        .toFixed(2);
    const expense = amounts
        .filter(item => item < 0)
        .reduce((sum, item) => (sum += item), 0)
        .toFixed(2);

    return (
        <div className={style['incomeExpense__container']}>
            <div className={style['incomeExpense__box']}>
                <h4 className={style['incomeExpense__heading']}>INCOME</h4>
                <p className={`${style['incomeExpense__money']} ${style['incomeExpense__money_plus']}`}>+${income}</p>
            </div>
            <div className={style['incomeExpense__box']}>
                <h4 className={style['incomeExpense__heading']}>EXPENSES</h4>
                <p className={`${style['incomeExpense__money']} ${style['incomeExpense__money_minus']}`}>-${Math.abs(expense)}</p>
            </div>
        </div>
    );
};

export default IncomeExpense;