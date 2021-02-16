import React from 'react';
import style from './App.module.css';
import { Header } from './components';
import Balance from './components/Balance/Balance';
import IncomeExpense from './components/IncomeExpense/IncomeExpense';
import TransactionList from './components/TransactionList/TransactionList';
import AddTransactionFrom from './components/AddTransactionForm/AddTransactionForm';

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
