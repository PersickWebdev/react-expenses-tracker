import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style['header__container']}>
            <h1 className={style['header__heading']}>
                Expense Tracker
            </h1>
        </div>
    );
};

export default Header;