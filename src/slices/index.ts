import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsReducer';

const store = configureStore({
  reducer: {
    cardsContainer: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
