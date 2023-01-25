import logo from './logo.svg';
import './App.css';
import RoundedButton from './RoundedButton.js'
import SquareButton from './SquareButton.js'
import Rating from './Rating';
import Accordion from './Accordion';

function App() {
  return (

<div>
  
  <BorderBox content="I am Cam"></BorderBox>
  <BorderBox content="I am Cam" border="true"></BorderBox>
  <BorderBox content="I am Cam" border="true" rounded="true"></BorderBox>

  
  {/*<Accordion heading ="The Title" body="visible" isExpanded="true"> </Accordion>
  <Accordion heading ="heading2" body="not visible" isExpanded="false"> </Accordion>*/}

     {/* <Rating value="1"></Rating>
      <Rating value="2"></Rating>
      <Rating value="3"></Rating>
      <Rating value="4"></Rating>
      <Rating value="5"></Rating>  */}


 {/*}    <SquareButton label="Home" active="true"/>
     <SquareButton label="Square"/>

      <RoundedButton label="React"/>
      <RoundedButton label= "javascript"/>
  <RoundedButton label="Node"/>  */}
    </div>
  );
}

export default App;
