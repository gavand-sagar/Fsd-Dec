import './App.css';
import RoundedButton from './RoundedButton';
import SquareButton  from './square_button';
import Rating from './rating';
import BorderBox from './BorderBox';
import Toggle from './Toggle';
import Counter from './counter';
import Accordion from './Accordion';
import ChangeColorWhenClicked from './button_change_color'
import RatingBox from './RatingBox'

function App() {
  return (
    <div>

      <ChangeColorWhenClicked></ChangeColorWhenClicked>

      <RatingBox></RatingBox>

      {/* <Counter min={0} max={15}></Counter>

      <br></br>

      <Counter min={10} max={20}></Counter> */}


      {/* <Toggle/> */}

      {/* <BorderBox content="I am Lucas"></BorderBox>
      <BorderBox content="I am Lucas" border="true"></BorderBox>
      <BorderBox content="I am Lucas" border="true" rounded="true"></BorderBox> */}

      {/* <Accordion heading="heading1" body="Visible body" isExpanded="true"></Accordion>
      <Accordion heading="heading2" body="this should not be visible" isExpanded="false"></Accordion> */}

      {/* <Rating value="1"></Rating> */}

      {/* <SquareButton label="Square01" active="true"/>
      <SquareButton label="Square02"/>
      <SquareButton label="Square03"/>

      <RoundedButton label="React" />
      <RoundedButton label="Javascript" />
      <RoundedButton label="C#" />
      <RoundedButton label="HTML" />
      <RoundedButton label="CSS" /> */}

      
    </div>
  );
}

export default App;
