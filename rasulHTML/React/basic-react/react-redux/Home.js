import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sagar from "./Sagar";
import Border from "./Border";
import SquareButton from "./SquareButton";
import MyDataContext from "./dataContext";
import { useSelector } from "react-redux";
export default function Home() {
  const [page, setPage] = useState("");

  const navigate = useNavigate();

  function goToRoute() {
    navigate(page);
  }

  function submit() {
    alert(checked);
  }

  const [checked, setChecked] = useState(false);
  const {someValue,setSomeValue} = useContext(MyDataContext);

  const username = useSelector(x=>x.counter.username)

  function change(){
    setSomeValue("New value")
  }

  return (
    <div>
      <Header />

      <button onClick={change}>Change</button>
      <hr />

      ( {someValue} ) coming from data useContext

      <hr></hr>

      {username} coming from redux
    </div>
  );
}
