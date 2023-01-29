import { useState } from "react";
import './Lucas.css';

export default function ChangeColorWhenClicked(props){

    const [isActive, setIsActive] = useState(false);

    const buttonClick = () => {
        // setIsActive(current => !current)
        setIsActive(clicked => !clicked)
    }

    return(<div class="wrapper">
        <span></span>>
    </div>)
}

