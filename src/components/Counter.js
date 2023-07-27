import classes from "./Counter.module.css";
import { counterActions } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const showCounter = useSelector((state) => state.showCounter);
  const counter = useSelector((state) => state.counter);

  const IncrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    console.log("Toogle");
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>

        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
