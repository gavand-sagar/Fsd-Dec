import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompanyName } from "./counterSlice";
import MyDataContext from "./dataContext";
import Header from "./Header";

export default function ShowFruit() {
  const { allFruits, setAllFruits } = useContext(MyDataContext);
  const dispatch = useDispatch();

  let companyName = useSelector((x) => x.counter.companyName);

  function doChange() {
    dispatch(changeCompanyName("Sagar-Gavand"));
  }

  return (
    <div>
      <Header />
      <button onClick={doChange}>Change</button>
      <h1>This is Show Fruit Page</h1>
      {allFruits.map((x) => (
        <p>{x}</p>
      ))}
      <hr />
      Copyright {companyName}
    </div>
  );
}
