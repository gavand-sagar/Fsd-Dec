export default function ProductPanel({ brand, model, price }) {
  return (
    <div className="product-panel-container">
      {brand}
      <br />
      {model}
      <br />
      {price}
    </div>
  );
}
