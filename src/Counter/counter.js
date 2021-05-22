import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div data-test="counter-app">
      <h1>Counter</h1>
      <h1 data-test="counter-display">
        Current Counter is: <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>
    </div>
  );
};

export default Counter;
