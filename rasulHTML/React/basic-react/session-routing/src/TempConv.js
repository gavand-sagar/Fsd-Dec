import { useState } from "react";
import Header from "./Header";

export default function TempConv() {
  const [textBox, setTextBox] = useState();
  const [result, setResult] = useState();

  function toFahrenheit() {
    setResult(Number(textBox * (9/5) + 32).toFixed(2) + '°F')
  }

  function toCelsius() {
    setResult(Number((textBox - 32) * (5/9)).toFixed(2) + '°C')
  }

  return (
    <div>
        <Header />
        <h1>Temperature Converter</h1>
        <input value={textBox} onChange={e=>setTextBox(e.target.value)} type="number" placeholder="Type temperature here..."/>
        <br/>
        <button onClick={toFahrenheit}>Celsius to Fahrenheit</button>
        <button onClick={toCelsius}>Fahrenheit to Celsius</button>         
        <hr></hr>
        Converted value: <b>{result}</b>
    </div>
  );
}
