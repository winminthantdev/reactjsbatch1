import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/reducer.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}> Increment</button>

        <span>{count}</span>

        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(100))}>Increment by amount</button>

        <button onClick={() => dispatch({type:"LOGIN_ERROR",payload:{customerror:"User not found"}})}>User Btn</button>
      </div>
    </div>
  );
}

export default App;
// 9RD