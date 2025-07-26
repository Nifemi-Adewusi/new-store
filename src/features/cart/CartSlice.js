import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: "Medit",
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // action.payload = newItem
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      //   state.cart.pop(action.payload)

      //   payload = pizzaId
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      console.log(state.cart);
    },
    increaseItemQuantity(state, action) {
      //   payload = pizzaId
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      if (item.quantity <= 0) {
        // If quantity is 0 or less, remove the item from the cart
        state.cart = state.cart.filter((i) => i.id !== action.payload);
        return;
      }
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

export const getCart = (state) => state.cart.cart;
export default cartSlice.reducer;
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// Currying the current quantity of an item by its ID
// This function returns a function that takes the state and returns the quantity 
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity || 0;