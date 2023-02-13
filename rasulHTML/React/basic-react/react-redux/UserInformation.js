import React, { useContext } from "react";
import { useSelector } from "react-redux";
import MyDataContext from "./dataContext";

export default function UserInformation() {
  // const {someValue} = useContext(MyDataContext)
  const username = useSelector((state) => state.counter.username);
  return (
    <div style={{ border: "1px solid black" }}>
      UserInformation - {username}
    </div>
  );
}
