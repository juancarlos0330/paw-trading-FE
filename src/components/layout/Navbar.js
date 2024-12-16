import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import { faTimes } from "@fortawesome/free-solid-svg-icons";
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

const Navbar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const urlPath = location.pathname;

  return (
    <>
      <div className="navbar-container">
        <a
          href="/"
          className={`navbar-item ${urlPath === "/" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faHouse} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Dashboard</span>
        </a>
        <a
          href="/projects"
          className={`navbar-item ${urlPath === "/projects" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Project</span>
        </a>
        <a
          href="/dashboard/analytics"
          className={`navbar-item ${
            urlPath === "/dashboard/analytics" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChartSimple} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Chart</span>
        </a>
        <a
          href="/blogs"
          className={`navbar-item ${
            urlPath.startsWith("/blogs") ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faComments} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Blogs</span>
        </a>
        <a
          href="/trending"
          className={`navbar-item ${urlPath === "/trending" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faChartColumn} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Trending</span>
        </a>
        <a
          href="/aboutus"
          className={`navbar-item ${urlPath === "/aboutus" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faSun} style={{ fontSize: "24px" }} />
          <span className="navbar-text">About US</span>
        </a>
        <a
          href="/admin-blog"
          className={`navbar-item ${urlPath === "/admin-blog" ? "active" : ""}`}
        >
          <FontAwesomeIcon
            icon={faSquarePollVertical}
            style={{ fontSize: "24px" }}
          />
          <span className="navbar-text">Admin Blog</span>
        </a>
        <a
          href="/overview/chain"
          className={`navbar-item ${
            urlPath === "/overview/chain" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Chain</span>
        </a>
      </div>
      <div
        className={`navbar-mobile-container ${collapsed ? "collapsed" : ""}`}
        id="navbar-mobile-container"
      >
        <button
          type="button"
          className={`navbar-close-btn ${collapsed ? "collapsed" : ""}`}
          onClick={() => setCollapsed(!collapsed)}
        >
          <FontAwesomeIcon icon={faTimes} style={{ fontSize: "24px" }} />
        </button>
        <a
          href="/"
          className={`navbar-item ${urlPath === "/" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faHouse} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Dashboard</span>
        </a>
        <a
          href="/overview/project"
          className={`navbar-item ${
            urlPath === "/overview/project" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Project</span>
        </a>
        <a
          href="/dashboard/analytics"
          className={`navbar-item ${
            urlPath === "/dashboard/analytics" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChartSimple} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Chart</span>
        </a>
        <a
          href="/blogs"
          className={`navbar-item ${
            urlPath.startsWith("/blogs") ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faComments} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Blogs</span>
        </a>
        <a
          href="/trending"
          className={`navbar-item ${urlPath === "/trending" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faChartColumn} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Trending</span>
        </a>
        <a
          href="/aboutus"
          className={`navbar-item ${urlPath === "/aboutus" ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faSun} style={{ fontSize: "24px" }} />
          <span className="navbar-text">About US</span>
        </a>
        <a
          href="/admin-blog"
          className={`navbar-item ${urlPath === "/admin-blog" ? "active" : ""}`}
        >
          <FontAwesomeIcon
            icon={faSquarePollVertical}
            style={{ fontSize: "24px" }}
          />
          <span className="navbar-text">Admin Blog</span>
        </a>
        <a
          href="/overview/chain"
          className={`navbar-item ${
            urlPath === "/overview/chain" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: "24px" }} />
          <span className="navbar-text">Chain</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
