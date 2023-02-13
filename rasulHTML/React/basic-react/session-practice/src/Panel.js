export default function Panel({ status, heading, body }) {
  return (
    <div className="panel-container">
      {status}
      {heading}
      <hr />
      {body}
      <hr />
      <br />
    </div>
  );
}
