import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    updateItemToppings: (state, action) => {
      const { itemId, selectedToppings } = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.selectedToppings = selectedToppings;
      }
    },
    removeItemFromCart: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, updateItemToppings } = cartSlice.actions;
export default cartSlice.reducer;
