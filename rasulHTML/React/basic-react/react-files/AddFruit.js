import { useContext, useState } from "react";
import MyDataContext from "./dataContext";
import Header from "./Header";

export default function AddFruit() {
  const { allFruits, setAllFruits } = useContext(MyDataContext);
  const [textBox, setTextBox] = useState("");
  function add() {
    setAllFruits([...allFruits, textBox]);
  }
  return (
    <div>
      <Header />
      <h1>This is Add Fruit Page</h1>
      <input
        value={textBox}
        onChange={(e) => setTextBox(e.target.value)}
      ></input>
      <button onClick={add}>Add</button>
    </div>
  );
}
