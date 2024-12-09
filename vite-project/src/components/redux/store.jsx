import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cartslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});  


// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './Cartslice'; // Ensure correct import

// export const Store = configureStore({
//   reducer: {
//     cart: cartReducer, // Ensure this matches with your slice
//   },
// });

