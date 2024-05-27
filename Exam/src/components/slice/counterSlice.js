import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      state.count++;
    },
    resetValue(state, action) {
      state.count = 0;
    },
  },

  name: "count",
});

export const { increment, resetValue } = counterSlice.actions;

export default counterSlice.reducer;
