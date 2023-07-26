import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        counter: state.counter - action.payload,
      };
    default:
      return {
        counter: state.counter,
      };
  }
};
const Store = createStore(counterReducer);
export default Store;
