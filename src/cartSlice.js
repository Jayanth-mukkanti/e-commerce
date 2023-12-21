import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addToCart: (state, action) => {
          return [...state, action.payload];
      },
      removeFromCart: (state, action) => {
          const itemIdToRemove = action.payload.id;
          return state.filter(item => item.id !== itemIdToRemove);
      },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

