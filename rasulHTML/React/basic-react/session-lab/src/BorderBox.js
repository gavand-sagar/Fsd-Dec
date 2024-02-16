export default function BorderBox({ border, content, rounded }) {
  if (border == "true" && rounded == "true") {
    return <div class="box border rounded">{content}</div>;
  } else if (border == "true") {
    return <div class="box border">{content}</div>;
  } else {
    return <div class="box">{content}</div>;
  }
}
