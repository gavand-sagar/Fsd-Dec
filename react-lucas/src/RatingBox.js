import { useState } from "react";
import './Lucas.css';

export default function RatingBox(props){

    const [isClicked, setClicked] = useState(false);

    const getRating = ({number}) => {
        return (<div class="wrapper">
        <span class={`${number >= 1 ? "red" : "black"}`}>&#9733;</span>
        <span class={`${number >= 2 ? "red" : "black"}`}>&#9733;</span>
        <span class={`${number >= 3 ? "red" : "black"}`}>&#9733;</span>
        <span class={`${number >= 4 ? "red" : "black"}`}>&#9733;</span>
        <span class={`${number >= 5 ? "red" : "black"}`}>&#9733;</span>
    </div>)
    }

    return (<div>
        <span>GetRating</span>
        
    </div>        
    )
    
}