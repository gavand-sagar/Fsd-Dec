// export default function SquareButton(props){
//     if(props.active == "true")
//     {
//         return (
//             <button className="square-button orange">{props.label}</button>
//         )
//     }else{
//         return (
//             <button className="square-button">{props.label}</button>
//         )
//     }
// }

// export default function SquareButton(props){
//     return (
//         <button
//             className={
//                 props.active == "true"
//                 ? "square-button orange"
//                 :"square-button"
//             }>
//                 {props.label}
//         </button>
//     )
// }

export default function SquareButton({ active, label }) {
  function getMeClassName() {
    if (active == "true") {
      return "square-button orange";
    } else {
      return "square-button";
    }
  }

  return <button className={getMeClassName()}> {label} </button>;
}
