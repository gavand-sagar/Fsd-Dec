import { useState } from "react";
import Header from "./Header";

export default function CalcSquare() {

    const [numberBox, setNumberBox] = useState();
    const[result,setResult] = useState();

    function powerTwo() {
        setResult(Number(numberBox)**2);
    }


    return(
        <div>
            <Header/>
            <h1>Square Calculation</h1>
            <input value={numberBox} onChange={e=>setNumberBox(e.target.value)} type="number" placeholder="Type number here..."/>
            <button onClick={powerTwo}>Calculate Square</button>
            <hr />
            {result}
        </div>
    )
}