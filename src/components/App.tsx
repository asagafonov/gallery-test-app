import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import CardsGallery from './CardsGallery';
import { switchFilter } from '../slices/cardsReducer';

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <h1>Museum</h1>
        <motion.button
          type="button"
          className="header__filter-button"
          onClick={() => dispatch(switchFilter())}
          layout
        >
          Filter!
        </motion.button>
      </header>
      <CardsGallery />
    </>
  );
};

export default App;
