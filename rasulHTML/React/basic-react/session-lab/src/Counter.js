import { useState } from "react";

export default function Counter({min,max}) {
  const [number, setNumber] = useState(min);

  function increment() {
    if (number < max) {
      setNumber(number + 1);
    }
  }

  function decrement() {
    if (number > min) {
      setNumber(number - 1);
    }
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{number}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
