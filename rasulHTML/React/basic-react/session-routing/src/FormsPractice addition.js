import { useState } from "react"
import Header from "./Header";

export default function FormsPractice() {
    const [textBox, setTextBox] = useState();
    const [textBox1, setTextBox1] = useState();
    const [total, setTotal] = useState();

    function show() {
        setTotal(Number(textBox) + Number(textBox1))
    }
    return(
        <div>
            <Header />
            <input value={textBox} onChange={e=>setTextBox(e.target.value)} type="number" placeholder="number 1"/>
            <input value={textBox1} onChange={e=>setTextBox1(e.target.value)} type="number" placeholder="number 2"/>
            <button onClick={show}>Click</button>
            <hr/>
            Addition is: {total} 
        </div>
    )
}