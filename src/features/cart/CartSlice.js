import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [
        {
            pizzaId: 12,
            name: "Medit",
            quantity: 2,
            unitPrice: 16,
            totalPrice:32,
        }
    ],
    
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
  reducers: {
      addItem(state, action) {
          state.cart.push(action.payload)
    },
      deleteItem(state, action) { 
          //   state.cart.pop(action.payload)

        //   payload = pizzaId
          state.cart = state.cart.filter(item=> item.pizzaId!==action.payload)
      },
      increaseItemQuantity(state, action) {
        //   payload = pizzaId
          const item = state.cart.find((item) => item.pizzaId === action.payload);
          item.quantity++;
          item.totalPrice = item.quantity * item.unitPrice;
      },

      decreaseQuantity(state, action) {
          const item = state.cart.find(item => item.pizzaId === action.payload);
          item.quantity--;
          item.totalPrice = item.quantity * item.unitPrice;
      },
      clearCart(state) {
          state.cart = [];
       },
      
  },
});
export default cartSlice;