import {ADD_TRANSACTION, DELETE_TRANSACTION} from "./actionTypes";

const initialState = {
    transactions: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TRANSACTION :
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }
        case ADD_TRANSACTION :
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

export default appReducer;