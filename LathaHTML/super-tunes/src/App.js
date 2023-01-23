import React, { Component } from "react";
import "./style.css"
import songs from "./songs";
import SongCard1 from "../componenets/SongCard1";

class App extends Component {
    state=
  {
    songs:songs
  }
 
  sortByTitle=()=>
  {
    this.setState({songs:[...this.state.songs.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]});
  }
  sortByRating=()=>
  {
    this.setState({songs:[...this.state.songs.sort((a, b) => b.rating - a.rating)]});
  }
  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <div className="sorting">
            <button className="st-btn" onClick={this.sortByTitle}>Sort By Title</button>
            <button className="st-btn" onClick={this.sortByRating}>Sort By Rating</button>
        </div>
        <div id="song-list">
        {this.state.songs.map((data) => (
          <SongCard1 key={data.id} data={data}/>
          // <SongCard
          //   data={data}
          // />
          //<div>{data.title}</div>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
