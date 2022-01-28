import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { switchFilter } from '../slices/cardsReducer';
import { RootState } from '../slices';
import museumLogo from '../assets/museumLogo.svg';

const Header = () => {
  const dispatch = useDispatch();

  const { filterIsOn } = useSelector((state: RootState) => state.cardsContainer);

  const buttonClass = cn('header__filter-button', {
    'header__filter-button_on': filterIsOn,
    'headeer__filter-button_off': !filterIsOn,
  });

  const allDescriptionClass = cn('header__wrapper__description', {
    header__wrapper__description_active: !filterIsOn,
  });

  const likedDescriptionClass = cn('header__wrapper__description', {
    header__wrapper__description_active: filterIsOn,
  });

  return (
    <header className="header">
      <img
        className="header__logo"
        src={museumLogo}
        alt="logo"
      />
      <div className="header__wrapper">
        <p className={allDescriptionClass}>show all</p>
        <button
          type="button"
          className={buttonClass}
          onClick={() => dispatch(switchFilter())}
        >
          <motion.div className="header__filter-button__circle" layout />
        </button>
        <p className={likedDescriptionClass}>liked only</p>
      </div>
    </header>
  );
};

export default Header;
