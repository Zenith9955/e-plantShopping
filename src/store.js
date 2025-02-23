import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Ensure the path is correct

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
