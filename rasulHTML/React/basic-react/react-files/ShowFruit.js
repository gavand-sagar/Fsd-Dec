import { useContext, useState } from "react";
import MyDataContext from "./dataContext";
import Header from "./Header";

export default function ShowFruit() {
  const { allFruits, setAllFruits } = useContext(MyDataContext);

  return (
    <div>
      <Header />
      <h1>This is Show Fruit Page</h1>
        {allFruits.map((x) => (
          <p>{x}</p>
        ))}
    </div>
  );
}
