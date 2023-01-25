export default function Accordion(props){
    
    if(props.isExpanded == "true"){
     return (<div>
        <h2>{props.heading}</h2>
        <p>{props.body}</p>
    </div>) 
}else{
    return (<div>
        <h2>{props.heading}</h2>
        </div> )
}
}