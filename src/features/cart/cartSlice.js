// we just use cart[] to prevent any problem and then syncing with the cart

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: 'piddeh',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload.id
      );
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.id
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.id
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
