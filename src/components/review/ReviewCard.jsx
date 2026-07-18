import React from "react";
import { FaChevronRight, FaChevronLeft} from "react-icons/fa6";
import "./reviewcard.css"
import user from "../../assets/alucard.png"

const ReviewCard = ({content, title, author, username}) => {
  return (
    <div>
      <div className="home-review-container">
        <div className="home-review-text">
          <h3>
            {content}
          </h3>
          <h5>{title}</h5>
          <h4>{author}</h4>
          <p>{username}</p>
        </div>
        <div className="home-review-img">
          <img src={user} alt="Name's review" />
        </div>
      </div>
      <div className="home-review-arrow-container">
        <div className="home-review-arrow-left">
        <FaChevronLeft />
        </div>
        <div className="home-review-arrow-right">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
