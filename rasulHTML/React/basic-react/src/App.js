import "./App.css";
// import RoundedButton from './RoundedButton.js';
import SquaredButton from "./SquaredButton.js";
// import Rating from './Rating.js';
// import Accordion from './Accordion.js';
// import BorderBox from "./BorderBox.js";

function App() {
  return (
    <div>
      {/* <BorderBox content="I am Ironman" />
      <BorderBox content="I am Ironman" border="true" />
      <BorderBox content="I am Ironman" border="true" rounded="true" /> */}

      {/* <Accordion heading="heading1" body="visible body" isExpanded="true"/>
      <Accordion heading="heading2" body="body is not visible" isExpanded="false"/> */}

      {/* <Rating value="3"/>
      <Rating value="2"/>
      <Rating value="5"/>
      <Rating value="4"/>
      <Rating value="1"/>
      <Rating value="0"/> */}

      <SquaredButton label="Home" active="true" />
      <SquaredButton label="New Post" />
      <SquaredButton label="New Post" />

      {/* <RoundedButton label="React"/>
      <RoundedButton label="JavaScript"/>
      <RoundedButton label="Node"/> */}
    </div>
  );
}

export default App;
