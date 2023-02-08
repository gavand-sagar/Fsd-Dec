import { useState } from "react";
import Header from "./Header";

export default function MultiplyOutputs() {

    const [numberBox, setNumberBox] = useState();
    const [textBox, setTextBox] = useState('');
    const[list,setList] = useState([]);

    function add() {
        
        // const copy = [...list]
        // copy.push(textBox)
        // setList(copy)

        // setList([...list,textBox])

        const copy = [...list]
        for( let i = 0; i < numberBox; i++){
        copy.push(numberBox)
        }
        setList(copy);
    }


    return(
        <div>
            <Header />
            <h1>Multiply Outputs</h1>
            <input value={textBox} onChange={e=>setTextBox(e.target.value)} type="text" placeholder="Type text here..."/>
            <br/>
            <input value={numberBox} onChange={e=>setNumberBox(e.target.value)} type="number" placeholder="Type number here..."/>
            <button onClick={add}>Multiply Text</button>
            <hr />
            {
                list.map(x=><p>{textBox}</p>)
            }
        </div>
    )
}