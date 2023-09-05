import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    product: [
        { name: 'Apple', price: 10 },
        { name: 'Orange', price: 5 },
        { name: 'Banana', price: 8 },
        { name: 'Grapes', price: 2 }
    ],

    cart: [],
    total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + action.payload.price;
    },

    removeToCart: (state, action) => {
      state.cart = state.cart.filter(
        (_, index) => index !== action.payload.index
      );
      state.total = state.total - action.payload.price;
    },
  },
});


export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
