import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setActiveFramework: (state, action) => {
      const { id } = action.payload;
      state.activeFrameworkIndex = id;
    },
  },
});

export const { setActiveFramework } = cardsSlice.actions;

export default cardsSlice.reducer;
