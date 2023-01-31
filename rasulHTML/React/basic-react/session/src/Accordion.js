export default function Accordion(props) {
  if (props.isExpanded == "true") {
    return (
      <div class="accordion">
        <h1>{props.heading}</h1>
        <p class="active-accordion">{props.body}</p>
      </div>
    );
  } else {
    return (
      <div class="accordion">
        <h1>{props.heading}</h1>
        <p>{props.body}</p>
      </div>
    );
  }
}
