import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

// import assets
import TradingImg from "../../assets/image/chart/trading.jpg";

// import style
import "./ProjectExplorer.scss";

const ProjectExplorer = () => {
  return (
    <div className="project-explorer-container">
      <div className="project-explorer-title">Project Explorer</div>
      <div className="project-explore-filter-view">
        <div className="project-explore-filter-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search here" />
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
        <button type="button" className="project-explore-filter-btn">
          <FontAwesomeIcon icon={faFilter} />
          Filter
        </button>
      </div>
      <div className="project-explore-view">
        <div className="project-explore-view-item">
          <img
            src={TradingImg}
            alt="trading"
            className="project-explore-view-item-img"
          />
          <div className="project-explore-view-item-subview">
            <p className="project-explore-view-item-subview-title">
              Project Title
            </p>
            <p className="project-explore-view-item-subview-content">
              Description about project detail data and data
            </p>
          </div>
        </div>
        <div className="project-explore-view-item">
          <img
            src={TradingImg}
            alt="trading"
            className="project-explore-view-item-img"
          />
          <div className="project-explore-view-item-subview">
            <p className="project-explore-view-item-subview-title">
              Project Title
            </p>
            <p className="project-explore-view-item-subview-content">
              Description about project detail data and data
            </p>
          </div>
        </div>
        <div className="project-explore-view-item">
          <img
            src={TradingImg}
            alt="trading"
            className="project-explore-view-item-img"
          />
          <div className="project-explore-view-item-subview">
            <p className="project-explore-view-item-subview-title">
              Project Title
            </p>
            <p className="project-explore-view-item-subview-content">
              Description about project detail data and data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectExplorer;
