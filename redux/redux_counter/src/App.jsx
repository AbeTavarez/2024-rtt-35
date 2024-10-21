import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "./features/counter/counterSlice";
import { useState } from "react";
import "./App.css";

function App() {
  // Read data from state
  const count = useSelector((state) => state.counter.value);
  console.log(count);

  // dispatch actions
  const dispatch = useDispatch();

  // local state for the input
  const [incrementAmount, setIncrementAmount] = useState(1);

  return (
    <>
      <h1>Redux Counter</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h2>Count: {count}</h2>

      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <button onClick={() => dispatch(incrementBy(incrementAmount))}>Add</button>

    </>
  );
}

export default App;
