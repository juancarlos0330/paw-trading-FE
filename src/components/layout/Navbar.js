import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

// import style
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-item">
        <FontAwesomeIcon icon={faHouse} style={{ fontSize: "24px" }} />
        <span className="navbar-text">Dashboard</span>
      </div>
      <div className="navbar-item">
        <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: "24px" }} />
        <span className="navbar-text">Dashboard</span>
      </div>
      <div className="navbar-item">
        <FontAwesomeIcon icon={faChartSimple} style={{ fontSize: "24px" }} />
        <span className="navbar-text">Dashboard</span>
      </div>
      <div className="navbar-item">
        <FontAwesomeIcon icon={faComments} style={{ fontSize: "24px" }} />
        <span className="navbar-text">Dashboard</span>
      </div>
      <div className="navbar-item">
        <FontAwesomeIcon icon={faSun} style={{ fontSize: "24px" }} />
        <span className="navbar-text">Dashboard</span>
      </div>
      <div className="navbar-item">
        <FontAwesomeIcon
          icon={faSquarePollVertical}
          style={{ fontSize: "24px" }}
        />
        <span className="navbar-text">Dashboard</span>
      </div>
      <div className="navbar-item">
        <FontAwesomeIcon icon={faChartColumn} style={{ fontSize: "24px" }} />
        <span className="navbar-text">Dashboard</span>
      </div>
      <div className="navbar-item">
        <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: "24px" }} />
        <span className="navbar-text">Dashboard</span>
      </div>
    </div>
  );
};

export default Navbar;