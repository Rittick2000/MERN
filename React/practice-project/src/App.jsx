import { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
  makeItZero,
} from "./features/counter/counterSlice";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./counter";
function App() {
  const [value, setValue] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByAmount(value));
  };

  const handleReset=()=>{
    dispatch(makeItZero());
  }
  return (
    <>
      <div className="container">
        <button className="button" onClick={handleIncrement}>
          Increment
        </button>
        <p>Counter: {count}</p>
        <button className="button" onClick={handleDecrement}>
          Decrement
        </button>
        <input
          type="number"
          placeholder="Increment by value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="button" onClick={handleIncrementByValue}>Submit</button>
        <button className="button" onClick={handleReset}>Reset</button>
      </div>
      <Counter/>
    </>
  );
}

export default App;
