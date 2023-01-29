import { useState } from "react";

export default function Accordion(props){

    const [isExpanded,setExpanded] = useState('true')

    function toggle() {
        if(isExpanded == "true"){
            setExpanded('false')
        } else {
            setExpanded('true')
        }
    }

    if(isExpanded == "true"){
        return(<div>
            <h2 onClick={toggle}>{props.heading}</h2>
            <p>{props.body}</p>
        </div>)
    } else {
        return(<div>
            <h2 onClick={toggle}>{props.heading}</h2>
        </div>)
    }
}

