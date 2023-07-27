import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterValues = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterValues,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const Store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default Store;
