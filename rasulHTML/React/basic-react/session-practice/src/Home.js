import { useContext } from "react";

import Header from "./Header";
import MyDataContext from "./dataContext";
import { useSelector } from "react-redux";
export default function Home() {
  const { someValue, setSomeValue } = useContext(MyDataContext);
  const username = useSelector((x) => x.counter.username);

  function change() {
    setSomeValue("New value");
  }

  return (
    <div>
      <Header />
      <button onClick={change}>Change</button>
      <hr />( {someValue} ) coming from data useContext
      <hr></hr>
      {username} coming from redux
    </div>
  );
}
