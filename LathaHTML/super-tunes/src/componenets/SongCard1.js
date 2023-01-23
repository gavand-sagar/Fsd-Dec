import React from "react";
import PropTypes from "prop-types";
import Rating from "./Rating"

const SongCard1  = ({ data }) => (
    <div className="song-card">
    <img src={data.thumb} alt={data.title} className="st-thumb"/>
    <div>
        <div className="song-title">{data.title} by {data.artist}</div>
        <div className="rating">
          <Rating stars={data.rating}/>
        </div>
    </div>

    </div>
  );
  
  SongCard1.propTypes = {
    data: PropTypes.shape({
      thumb: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
  })
}

export default SongCard1;
