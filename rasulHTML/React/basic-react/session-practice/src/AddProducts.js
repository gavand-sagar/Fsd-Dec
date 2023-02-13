import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeProducts } from "./counterSlice";
export default function AddProducts() {
  const dispatch = useDispatch();

  const [brandBox, setBrandBox] = useState("");
  const [modelBox, setModelBox] = useState("");
  const [priceBox, setPriceBox] = useState();

  let products = useSelector((x) => x.counter.products);

  function add() {
    dispatch(changeProducts([...products, [brandBox, modelBox, priceBox]]));
    setBrandBox("");
    setModelBox("");
    setPriceBox("");
  }

  return (
    <div>
      <Header />
      <h1>Add a Product</h1>
      <input
        type="text"
        value={brandBox}
        onChange={(e) => setBrandBox(e.target.value)}
        placeholder="brand"
      />
      <br />
      <input
        type="text"
        value={modelBox}
        onChange={(e) => setModelBox(e.target.value)}
        placeholder="model"
      />
      <br />
      <input
        type="number"
        value={priceBox}
        onChange={(e) => setPriceBox(e.target.value)}
        placeholder="price"
      />
      <br />
      <button onClick={add}>Add</button>
    </div>
  );
}
