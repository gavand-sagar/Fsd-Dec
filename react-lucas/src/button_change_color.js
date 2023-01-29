import { useState } from "react";
import './Lucas.css';

export default function ChangeColorWhenClicked(props){

    const [isActive, setIsActive] = useState(false);

    const buttonClick = () => {
        // setIsActive(current => !current)
        setIsActive(clicked => !clicked)
    }

    return(<div class="wrapper">
        <button onClick={buttonClick} class="button" style={{backgroundColor: isActive ? 'orange' : '',}}>Home</button>
        <button onClick={buttonClick} class="button" style={{backgroundColor: isActive ? 'orange' : '',}}>New Post</button>
    </div>)
}

