export default function SquareButton(props){

if (props.active == "true")
    {
    return (
        <button className='square-button orange'>{props.label}</button>
    )
    }else{
        return (<button className='square-button'>{props.label}</button>)
    }
}