// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(item => item.src === action.payload.src);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.src !== action.payload.src);
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.items.find(item => item.src === action.payload.src);
//       if (item) item.quantity += 1;
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.items.find(item => item.src === action.payload.src);
//       if (item && item.quantity > 1) item.quantity -= 1;
//     },
//   },
// });

// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
// export default cartSlice.reducer;





import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.src === action.payload.src);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.src !== action.payload.src);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.src === action.payload.src);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.src === action.payload.src);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

