export default function SongList({ rating, albumCover, artistName, songName }) {
  function getRating() {
    if (rating == 5) {
      return <div className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>;
    } else if (rating == 4) {
      return <div className="rating">&#9733;&#9733;&#9733;&#9733;</div>;
    } else if (rating == 3) {
      return <div className="rating">&#9733;&#9733;&#9733;</div>;
    } else if (rating == 2) {
      return <div className="rating">&#9733;&#9733;</div>;
    } else if (rating == 1) {
      return <div className="rating">&#9733;</div>;
    } else {
      return <div className="rating"></div>;
    }
  }

  return (
    <div class="playList">
      <img src={albumCover} alt={songName} />
      <div class="nameAndRating">
        <span>
          {songName} by {artistName}
        </span>
        <span class="stars"> {getRating()}</span>
      </div>
    </div>
  );
}
