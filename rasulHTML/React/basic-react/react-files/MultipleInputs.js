import { useState } from "react";

export default function MultipleInputs() {
  const [textBox, setTextBox] = useState("");

  const [result, setResult] = useState("");

  function add() {
    setResult(textBox * textBox)
  }

  return (
    <div>


       {/* <input placeholder="Principal Amt."></input> 
       <input placeholder="Rate"></input> 
       <input placeholder="Tenure"></input>

       <button>Calculate Interest</button>  */}

      {/* Temp. Conversion
      <br></br>
      <br></br>
      <input placeholder="Value in C."></input>
      <br></br>
      <br></br>
      <button>=</button>
        Value in F :  */}

      <h1>Square Calculation</h1>
      <input value={textBox} onChange={e=>setTextBox(e.target.value)}></input>
      <button onClick={add}>Calculate Square</button>        
      <hr></hr>
      {result}
    </div>
  );
}
