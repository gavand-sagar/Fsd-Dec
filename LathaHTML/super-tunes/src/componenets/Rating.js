import React from "react";
import PropTypes from "prop-types";

const Rating  = ({ stars }) => (
    [...Array(Math.round(stars <= 5 ? stars : 0)).keys()].map((star)=>
        (<div className="star"></div>)
    )
  );
  
  Rating.propTypes = {
    stars: PropTypes.number
  }

export default Rating;
