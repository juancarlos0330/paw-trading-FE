import React from "react";

// import assets
import TradingImg from "../../assets/image/project.png";

// import style
import "./ProjectDescription.scss";

const ProjectDescription = () => {
  return (
    <div className="project-description-container">
      <div className="project-description-title">Project Description</div>
      <div className="project-description-view">
        <div className="project-description-item-img">
          <img src={TradingImg} alt="trading" />
        </div>
        <div className="project-description-item-view">
          <p className="project-description-item-desc">
            Our project is a trading platform that allows users to buy and sell
            cryptocurrencies. We have a wide range of cryptocurrencies to choose
            from, including Bitcoin, Ethereum, and more. Our trading platform is
            user-friendly and easy to use, making it accessible to a wide range
            of users.
          </p>
          <a
            target="_blank"
            href="https://www.officialprojectwebsite.com"
            className="project-description-item-link"
          >
            https://www.officialprojectwebsite.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
