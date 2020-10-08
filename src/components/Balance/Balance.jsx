import React from "react";
import style from './Balance.module.css';
import {connect} from "react-redux";

const Balance = (props) => {
    const amounts = props.transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((sum, item) => (sum += item), 0).toFixed(2);

    return (
        <div className={style.balance__container}>
            <h4 className={style.balance__heading}>Your balance</h4>
            <span className={style.balance__figures}>${total}</span>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        transactions: state.app.transactions
    }
}

export default connect(mapStateToProps, null)(Balance) ;