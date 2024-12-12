import React from "react";

// import assets
import ProjectOwnerImg from "../../assets/image/avatar.jpeg";

// import style
import "./ProjectOwner.scss";

const ProjectOwner = () => {
  return (
    <div className="project-owner-container">
      <div className="project-owner-img">
        <img src={ProjectOwnerImg} alt="project owner" />
      </div>
      <div className="project-owner-view">
        <div className="project-owner-name">Liam Smith</div>
        <div className="project-owner-desc">2,000,000 monthly listeners</div>
        <div className="project-owner-username">@liamsmith</div>
      </div>
    </div>
  );
};

export default ProjectOwner;
