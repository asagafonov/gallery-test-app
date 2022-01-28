import { createSlice } from '@reduxjs/toolkit';

import { Card, CardsState } from '../utils/interfaces';
import { getImageURL } from '../utils/urls';

const initialState: CardsState = {
  cards: [],
  filterIsOn: false,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardsData: (state, action) => {
      const { data } = action.payload;

      const dataWithLikes = data
        .map((item: Card): Card => ({
          ...item,
          url: getImageURL(item.image_id),
          hasLike: false,
        }));

      state.cards = dataWithLikes;
    },
    removeCard: (state, action) => {
      const { cardId } = action.payload;

      state.cards = state.cards
        .filter((item: Card): Boolean => item.id !== cardId);
    },
    addLike: (state, action) => {
      const { cardId } = action.payload;

      state.cards = state.cards.map((item: Card): Card => {
        if (item.id === cardId) {
          return { ...item, hasLike: true };
        }
        return item;
      });
    },
    removeLike: (state, action) => {
      const { cardId } = action.payload;

      state.cards = state.cards.map((item: Card): Card => {
        if (item.id === cardId) {
          return { ...item, hasLike: false };
        }
        return item;
      });
    },
    switchFilter: (state) => {
      state.filterIsOn = !state.filterIsOn;
    },
  },
});

export const {
  setCardsData, removeCard, addLike, removeLike, switchFilter,
} = cardsSlice.actions;

export default cardsSlice.reducer;
