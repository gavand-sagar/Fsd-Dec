import Header from "./Header";
import MyDataContext from "./dataContext";
import { useContext } from "react";

export default function About() {
  
  const {someValue,setSomeValue} = useContext(MyDataContext);

  function change(){
    setSomeValue("New Value")
  }
  return (
    <div>
      <Header />
      <input
                type={"text"}
                value={someValue}
                onChange={(e) => setSomeValue(e.target.value)}
            />
      <button onClick={change}>change</button>
      <br/>
      {someValue}
      <hr/>
      <h1>This is About</h1>
    </div>
  );
}
