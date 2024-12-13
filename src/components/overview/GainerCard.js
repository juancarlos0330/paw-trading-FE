import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import {
  faStar,
  faCircleUser,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";

// import style
import "./GainerCard.scss";

// temp data
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

const GainerCard = ({ title }) => {
  return (
    <div className="gainer-card-container">
      <div className="gainer-card-title">{title}</div>
      <div className="gainer-card-type-view">
        <div className="gainer-card-type-item"># Pair</div>
        <div className="gainer-card-type-item">Dex</div>
        <div className="gainer-card-type-item">Price USD</div>
        <div className="gainer-card-type-item">1H</div>
        <div className="gainer-card-type-item">24H</div>
      </div>
      {data.map((item, index) => {
        return (
          <div className="gainer-card-content-view" key={index}>
            <div className="gainer-card-content-item">
              <FontAwesomeIcon icon={faStar} />
              <span className="text">1</span>
              <FontAwesomeIcon icon={faCircleUser} />
              <p className="user-text">Sub project A/B</p>
            </div>
            <div className="gainer-card-content-item">Dex</div>
            <div className="gainer-card-content-item">
              <span className="text">$0.03568</span>
            </div>
            <div className="gainer-card-content-item">
              <FontAwesomeIcon icon={faSortUp} />
              <span className="plus">273.12%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GainerCard;
