import { useState } from "react";
import Header from "./Header";

export default function TempConv() {
  const [principalBox, setPrincipalBox] = useState();
  const [intRateBox, setIntRateBox] = useState();
  const [yearsBox, setYearsBox] = useState();

  const [result, setResult] = useState();

  function calcAmt() {
    setResult(Number(principalBox*((1+(intRateBox/100))**yearsBox)).toFixed(2))
  }

  return (
    <div>
        <Header />
      <h1>Compound Interest Calculator</h1>
      <input value={principalBox} onChange={e=>setPrincipalBox(e.target.value)} type="number" placeholder="Principal Amt"/>
      <br/>
      <input value={intRateBox} onChange={e=>setIntRateBox(e.target.value)} type="number" placeholder="Interest rate in %"/>
      <br/>
      <input value={yearsBox} onChange={e=>setYearsBox(e.target.value)} type="number" placeholder="No. of Years"/>
      <br/>
      <button onClick={calcAmt}>Calculate Future Amount</button>        
      <hr></hr>
      Future amount is <b>${result}</b>
    </div>
  );
}
