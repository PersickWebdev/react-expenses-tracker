import React from 'react';
import { Header } from './components';
import { Balance } from './components';
import { IncomeExpense } from './components';
import TransactionList from './components/TransactionList/TransactionList';
import AddTransactionFrom from './components/AddTransactionForm/AddTransactionForm';
import style from './App.module.css';

const App = () => {
  return (
      <div className={style['app__container']}>
          <Header />
          <div className={style['app__content']}>
              <Balance />
              <IncomeExpense />
              <TransactionList />
              <AddTransactionFrom />
          </div>
      </div>
  );
}

export default App;
