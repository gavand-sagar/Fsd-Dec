import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "./Header";


export default function Home() {

    const navigate = useNavigate()

    const [goTo, setGoTo] = useState('');

    function go() {
      navigate(goTo)
    }
    
    return(
        <div>
            <Header/>
            <h2>Home</h2>
            <input value={goTo} onChange={e=>setGoTo(e.target.value)} type="text" placeholder="Type /(location)"/>
            <button onClick={go}>Go!</button>
        </div>
    )
}