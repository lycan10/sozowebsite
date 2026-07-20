import React from "react";

import "./reviewcard.css"

const ReviewCard = ({content, title, author, username, image}) => {
  return (
    <div>
      <div className="home-review-container">
        <div className="home-review-text">
          <h3>
            " {content} "
          </h3>
          <h5>{title}</h5>
          <h4>{author}</h4>
          <p>{username}</p>
        </div>
        <div className="home-review-img">
        <img src={image} alt={`${author}'s profile`} />
        </div>
      </div>
     
    </div>
  );
};

export default ReviewCard;
