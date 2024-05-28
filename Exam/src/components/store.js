import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import productsReducer from "./slice/productsSlice";
import userReducer from "./slice/userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
