import React from "react";
import style from './IncomeExpense.module.css';
import {connect} from "react-redux";

const IncomeExpense = (props) => {
    const amounts = props.transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((sum, item) => (sum += item), 0)
        .toFixed(2);
    const expense = amounts
        .filter(item => item < 0)
        .reduce((sum, item) => (sum += item), 0)
        .toFixed(2);

    return (
        <div className={style.incomeExpense__container}>
            <div className={style.incomeExpense__box}>
                <h4 className={style.incomeExpense__heading}>INCOME</h4>
                <p className={`${style.incomeExpense__money} ${style.incomeExpense__money_plus}`}>+${income}</p>
            </div>
            <div className={style.incomeExpense__box}>
                <h4 className={style.incomeExpense__heading}>EXPENSES</h4>
                <p className={`${style.incomeExpense__money} ${style.incomeExpense__money_minus}`}>-${Math.abs(expense)}</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        transactions: state.app.transactions
    }
}

export default connect(mapStateToProps, null)(IncomeExpense);