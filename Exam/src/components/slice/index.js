import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.js";

const store = configureStore({
  reducer: {
    count: counterSlice,
  },
});

export default store;
