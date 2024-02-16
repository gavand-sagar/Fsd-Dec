import Header from "./Header";
import MyDataContext from "./dataContext";
import { useContext, useState } from "react";

export default function AddFruit() {
  const [textBox, setTextBox] = useState("");
  const { someFruit, setSomeFruit } = useContext(MyDataContext);

  function add() {
    setSomeFruit([textBox, ...someFruit]);
    setTextBox("");
  }

  return (
    <div>
      <Header />
      <h1>Add a fruit</h1>
      <input value={textBox} onChange={(e) => setTextBox(e.target.value)} />
      <button onClick={add}>Add</button>
    </div>
  );
}
