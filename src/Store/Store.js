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
const initialAuthValue = { isAuth: false };
const authSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthValue,
  reducers: {
    isLoggin(state) {
      state.isAuth = true;
    },
    isLogout(state) {
      state.isAuth = false;
    },
  },
});

const Store = configureStore({
  reducer: { counter: counterSlice.reducer, Auth: authSlice.reducer },
});
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default Store;
