import { useState } from "react";
import Header from "./Header";

export default function MultipleInputs() {

    const [textBox, setTextBox] = useState('');
    const[list,setList] = useState([]);

    function add() {
        
        // const copy = [...list]
        // copy.push(textBox)
        // setList(copy)

        // setList([...list,textBox])

        const copy = [...list]
        for( let i = 0; i < textBox; i++){
        copy.push(textBox)
        }
        setList(copy);
    }


    return(
        <div>
            <Header />
            <h1>Multiple Inputs</h1>
            <input value={textBox} onChange={e=>setTextBox(e.target.value)} type="text" placeholder="Type name here..."/>
            <button onClick={add}>Add</button>
            <hr />
            {
                list.map(x=><p>Hi there</p>)
            }
        </div>
    )
}