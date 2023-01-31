import "./App.css";
import SongList from "./SongList.js";
import Sort from "./Sort.js";

function App() {
  let songList = [
    {
      albumCover: "./images/super-tunes/s1.jpeg",
      songName: "Vibe",
      artistName: "Cookiee Kawaii",
      rating: "4",
    },
    {
      albumCover: "./images/super-tunes/s2.png",
      songName: "death bed (feat. beabadoobee)",
      artistName: "Powfu",
      rating: "3",
    },
    {
      albumCover: "./images/super-tunes/s3.jpg",
      songName: "Moral of the Story",
      artistName: "Ashe",
      rating: "5",
    },
    {
      albumCover: "./images/super-tunes/s4.jpeg",
      songName: "My Truck",
      artistName: "Breland",
      rating: "2",
    },
    {
      albumCover: "./images/super-tunes/s5.jpeg",
      songName: "Pura Pura Lupa",
      artistName: "Mahen",
      rating: "3",
    },
    {
      albumCover: "./images/super-tunes/s6.png",
      songName: "WHATS POPPIN",
      artistName: "Jack Harlow",
      rating: "4",
    },
    {
      albumCover: "./images/super-tunes/s7.jpeg",
      songName: "Apollo",
      artistName: "Smoove'L",
      rating: "4",
    },
    {
      albumCover: "./images/super-tunes/s8.jpeg",
      songName: "Carnaval Chegando",
      artistName: "Rennan Da Penha",
      rating: "5",
    },
    {
      albumCover: "./images/super-tunes/s9.jpg",
      songName: "Psycho!",
      artistName: "Mase",
      rating: "3",
    },
    {
      albumCover: "./images/super-tunes/s10.png",
      songName: "Any Song",
      artistName: "Zico",
      rating: "4",
    },
  ];

  return (
    <body>
      <div class="mainContainer">
        <header>
          <h1>SuperTunes - Songs of the Week</h1>
        </header>

        <hr />

        <div class="filter">
          <Sort type="title" />
          <Sort type="rating" />
        </div>

        <div id="listContainer">
          {songList.map((newList) => (
            <SongList
              albumCover={newList.albumCover}
              songName={newList.songName}
              artistName={newList.artistName}
              rating={newList.rating}
            />
          ))}
        </div>
      </div>
    </body>
  );
}

export default App;
