import React from 'react';
import { Header } from './components';
import { Balance } from './components';
import { IncomeExpense } from './components';
import { TransactionList } from './components';
import { AddTransactionForm } from './components';
import style from './App.module.css';

const App = () => {
  return (
      <div className={style['app__container']}>
          <Header />
          <div className={style['app__content']}>
              <Balance />
              <IncomeExpense />
              <TransactionList />
              <AddTransactionForm />
          </div>
      </div>
  );
};

export default App;
