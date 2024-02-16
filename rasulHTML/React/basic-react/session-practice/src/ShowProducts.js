import Header from "./Header";
import { useSelector } from "react-redux";
import ProductPanel from "./ProductPanel";
export default function ShowProducts() {
  const products = useSelector((x) => x.counter.products);

  return (
    <div>
      <Header />
      <h1>Show Products</h1>
      <br />
      <div className="gallery-panel-container">
        {products.map(([x, y, z]) => (
          <ProductPanel
            brand={<h2>{x}</h2>}
            model={<p>{y}</p>}
            price={
              <p>
                <b>${Number(z).toFixed(2)}</b>
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
}
