import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { switchFilter } from '../slices/cardsReducer';
import { RootState } from '../slices';

const Header = () => {
  const dispatch = useDispatch();

  const { filterIsOn } = useSelector((state: RootState) => state.cardsContainer);

  const buttonClass = cn('header__filter-button', {
    'header__filter-button_on': filterIsOn,
    'headeer__filter-button_off': !filterIsOn,
  });

  return (
    <header className="header">
      <h1>Museum</h1>
      <button
        type="button"
        className={buttonClass}
        onClick={() => dispatch(switchFilter())}
      >
        <motion.div className="header__filter-button__circle" layout />
      </button>
    </header>
  );
};

export default Header;
