const redux = require("redux");
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 2,
      };

    case "DECREMENT":
      return {
        counter: state.counter - 2,
      };
  }
  return {
    counter: state.counter,
  };
};
const store = redux.createStore(counterReducer);
const countrSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(countrSubscriber);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
