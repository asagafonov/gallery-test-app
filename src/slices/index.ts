import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsReducer';

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
