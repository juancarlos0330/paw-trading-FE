import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// import style
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="view-all">
        <button type="button" className="view-all-btn">
          View All
        </button>
      </div>
      <div className="search-header">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search here" />
      </div>
      <div className="manage-section">
        <div className="manage-item">
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="manage-item">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="manage-item">
          <a href="/login" className="manage-login-btn">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
