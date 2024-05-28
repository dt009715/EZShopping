import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
      },
      clearCart: (state) => {
        state.items = [];
      },
    },
  });

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// src/slices/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     totalQuantity: 0
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const { id, title, price, quantity } = action.payload;
//       const existingItemIndex = state.items.findIndex((item) => item.id === id);

//       if (existingItemIndex !== -1) {
//         // Si l'article existe déjà, met à jour la quantité
//         state.items[existingItemIndex].quantity += quantity;
//       } else {
//         // Sinon, ajoute l'article au panier
//         state.items.push({ id, title, price, quantity });
//       }
//     },
// //     removeFromCart: (state, action) => {
// //       const id = action.payload;
// //       state.items = state.items.filter((item) => item.id !== id);
// //     },
// //     updateQuantity: (state, action) => {
// //       const { id, quantity } = action.payload;
// //       const item = state.items.find((item) => item.id === id);
// //       if (item) {
// //         item.quantity = quantity;
// //       }
// //     },
// //     clearCart: (state) => {
// //       state.items = [];
// //     },
// //   },
// // });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
