// export default function SquaredButton(props) {
//   if(props.active == "true"){return(
//       <button className="squaredButton active-button">{props.label}</button>

//   );} else{return(
//       <button className="squaredButton">{props.label}</button>
//   );}

// }

// export default function SquaredButton(props) {
//     return (
//         <button
//         className={
//             props.active == "true" ? "squaredButton active-button" : "squaredButton"
//         }
//         >
//         {props.label}
//         </button>
//     );
// }

export default function SquaredButton(props) {
  function getMeClassName() {
    if (props.active == "true") {
      return "squaredButton active-button";
    } else {
      return "squaredButton";
    }
  }

  return <button className={getMeClassName()}>{props.label}</button>;
}
