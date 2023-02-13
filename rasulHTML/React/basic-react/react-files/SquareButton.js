export default function SquareButton({ active, label,someValue }) {
  function getMeClassName() {
    if (active == "true") {
      return "square-button orange";
    } else {
      return "square-button";
    }
  }

  return <button className={getMeClassName()}> {label} {someValue} </button>;
}
