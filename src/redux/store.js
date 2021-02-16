import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { appReducer } from './appReducer';

const reducers = combineReducers({
    app: appReducer
});

export const store = createStore(reducers);