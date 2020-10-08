import {ADD_TRANSACTION, DELETE_TRANSACTION} from "./actionTypes";

export const deleteTransaction = (id) => {
    return {
        type: DELETE_TRANSACTION,
        payload: id
    }
}

export const addTransaction = (newTransaction) => {
    return {
        type: ADD_TRANSACTION,
        payload: newTransaction
    }
}