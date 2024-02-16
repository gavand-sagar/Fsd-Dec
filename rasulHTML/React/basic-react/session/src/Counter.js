import { useState } from "react";

export default function Counter({ max, min }) {
  const [value, setValue] = useState(min);

  function doIncrement() {
    if (value < max) {
      setValue(value + 1);
    }
  }

  function doDecrement() {
    if (value > min) {
      setValue(value - 1);
    }
  }

  return (
    <div>
      <button onClick={doDecrement}>-</button>
      {value}
      <button onClick={doIncrement}>+</button>
    </div>
  );
}
