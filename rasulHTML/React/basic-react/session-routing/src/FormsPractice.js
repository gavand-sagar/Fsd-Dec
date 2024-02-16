import { useState } from "react"
import Header from "./Header";

export default function FormsPractice() {
    const [inputType, setInputType] = useState('password');
    const [textBox, setTextBox] = useState('');

    function show() {
        setInputType("text")
    }
    return(
        <div>
            <Header />
            <input value={textBox} onChange={e=>setTextBox(e.target.value)} type={inputType}/>
            <button onClick={show}>View Password</button>
        </div>
    )
}