export default function BorderBox(props) {
  if (props.border == "true" && props.rounded == "true") {
    return <div class="borderBox border rounded">{props.content}</div>;
  } else if (props.border == "true") {
    return <div class="borderBox border">{props.content}</div>;
  } else {
    return <div class="borderBox">{props.content}</div>;
  }
}
