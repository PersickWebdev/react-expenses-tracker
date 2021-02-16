import { ADD_TRANSACTION } from './actionTypes';
import { DELETE_TRANSACTION } from './actionTypes';

export const addTransaction = (newTransaction) => {
    return {
        type: ADD_TRANSACTION,
        payload: newTransaction
    };
};

export const deleteTransaction = (id) => {
    return {
        type: DELETE_TRANSACTION,
        payload: id
    };
};