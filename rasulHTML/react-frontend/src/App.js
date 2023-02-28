import "./App.css";
import CreateThought from "./CreateThought";
// import { useEffect, useState } from 'react';
// import Login from './Login';
// import AddSong from './AddSong';
import ThoughtsList from "./ThoughtsList";

function App() {
  // const [songs, setSongs] = useState([])
  // const [songs2, setSongs2] = useState([])

  // const[rating,setRating] = useState("");
  //on every page load we will call server
  // useEffect(()=>{
  //   //api call
  //   fetch('http://localhost:3001/songs')
  //   .then(res => res.json())
  //   .then(response=>{
  //     setSongs(response)
  //   })

  // },[])

  // function Search() {
  //   fetch('http://localhost:3001/songs')
  //     .then(res => res.json())
  //     .then(response => {
  //       setSongs(response)
  //     })
  // }

  // function Search2(){
  //   fetch(`http://localhost:3001/songs?rating=${rating}`)
  //   .then(res => res.json())
  //   .then(response => {
  //     setSongs2(response)
  //   })
  // }

  return (
    <div className="App">
      <CreateThought />
      <ThoughtsList />
      {/* <AddSong/> */}
      {/* <Login/> */}
      {/* <fieldset>
        <div><button onClick={Search}>Search</button></div>
        {
          songs.map(x => <li>{x.songName} - {x.rating}</li>)
        }
     </fieldset>
     <fieldset>
      <div><input type={'number'} placeholder="Enter Rating" value={rating} onChange={e=>setRating(e.target.value)}/></div>
        <div><button onClick={Search2}>Search</button></div>
        {
          songs2.map(x => <li>{x.songName} - {x.rating}</li>)
        }
     </fieldset> */}
    </div>
  );
}

export default App;
