import React from "react";
import style from './TransactionList.module.css';
import {connect} from "react-redux";
import Transaction from "./Transaction/Transaction";
import {deleteTransaction} from "../../redux/actionCreators";

const TransactionList = (props) => {
    const transactionElements = props.transactions.map(transaction => {
        return (
            <Transaction key={transaction.id}
                         id={transaction.id}
                         text={transaction.text}
                         amount={transaction.amount}
                         deleteTransaction={props.deleteTransaction}
            />
        );
    });

    return (
        <div className={style.transactionList__container}>
            <h4 className={style.transactionList__heading}>History</h4>
            <ul className={style.transactionList__list}>
                {transactionElements}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        transactions: state.app.transactions
    }
}

export default connect(mapStateToProps, {deleteTransaction})(TransactionList);