import Header from "./Header";
import MyDataContext from "./dataContext";
import { useContext } from "react";

export default function ShowFruits() {
  const { someFruit, setSomeFruit } = useContext(MyDataContext);

  return (
    <div>
      <Header />
      <h1>Show Fruits</h1>
      <ul>
      {someFruit.map((x) => (
        <li>{x}</li>
      ))}
      </ul>
    </div>
  );
}
