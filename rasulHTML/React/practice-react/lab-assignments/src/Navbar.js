import { useState } from "react"
export default function Navbar() {
    const[activeHome, setActiveHome] = useState(false);
    const[activeNewPost, setActiveNewPost] = useState(false);

    function clickedHome(){
        setActiveHome(true)
        setActiveNewPost(false)
    }

    function clickedNewPost(){
        setActiveNewPost(true)
        setActiveHome(false)
    }

    return(
        <div>
            <button onClick={clickedHome} className={activeHome ? "orange-button" : "black-button"}>Home</button>
            <button onClick={clickedNewPost} className={activeNewPost ? "orange-button" : "black-button"}>NewPost</button>
        </div>

    )

}