import logo from "./logo.svg";
import "./App.css";
import RoundedButton from "./RoundedButton.js";
import SquareButton from "./SquareButton.js";
import Rating from "./Rating";
import Accordion from "./Accordion";
import BorderBox from "./BorderBox";
import Toggle from "./Toggle";
import Counter from "./Counter";

function App() {
  let items = ["Home", "About", "Gallery", "Events"];

  let buttons = [
    {
      name: "Home",
      status: "false",
    },
    {
      name: "Gallery",
      status: "false",
    },
    {
      name: "Events",
      status: "false",
    },
  ];

  return (
    <div>
      {items.map((x) => (
        <RoundedButton label={x} />
      ))}

      <hr></hr>

      {
        buttons.map(x=><SquareButton label={x.name} active={x.status}/>)
      }

      {/* <RoundedButton label="Home"/>
      <RoundedButton label="About"/>
      <RoundedButton label="Gallery"/>
      <RoundedButton label="Events"/> */}

      {/* {items.map((x) => (
        <RoundedButton label={x} />
      ))} */}

      {/* <RoundedButton label="React"/> */}

      {/* {
      items.map(ggg => <h1>{ggg}</h1>  )
    } */}

      {/* <Accordion heading="heading" body="This is body"/> */}

      {/* <Counter min={0} max={15}/>
    <br></br>
    <br></br>
    <Counter min={10} max={20}/> */}

      {/* <Toggle/> */}

      {/* <BorderBox content="I am Sagar"></BorderBox>
      <BorderBox content="I am Mark" border="true"></BorderBox>
      <BorderBox content="I am Lucas" border="true" rounded="true"></BorderBox>
      <BorderBox content="I am Latha" border="true"></BorderBox>
      <BorderBox content="I am Ekta" border="true" rounded="true" ></BorderBox>
 */}

      {/* <Accordion heading="The Title" body="Visible body" isExpanded="true"></Accordion>
      <Accordion heading="heading2" body="this should not be visible" isExpanded="false"></Accordion> */}
      {/* 
      <Rating value="1"></Rating>
      <Rating value="4"></Rating>
      <Rating value="2"></Rating>
      <Rating value="3"></Rating>
      <Rating value="5"></Rating>
      <Rating value="0"></Rating> */}

      {/* <SquareButton label="Home" active="true"/>
      <SquareButton label="New Post"></SquareButton>
      <SquareButton label="New Post"></SquareButton> */}

      {/* <RoundedButton label="React"></RoundedButton>
      <RoundedButton label="Javascript"/>
      <RoundedButton label="Node"/>
      <RoundedButton label="Iron Man"/> */}

      {/* <button>Home</button>
      <button>About</button>
      <button>Gallery</button> */}
    </div>
  );
}

export default App;
