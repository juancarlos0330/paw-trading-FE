import React from "react";

// import components
import ProjectOwner from "../../components/overview/ProjectOwner";
import ProjectDescription from "../../components/overview/ProjectDescription";

// import style
import "./ProjectOverview.scss";

const ProjectOverview = () => {
  return (
    <div className="project-overview-page">
      <h2 className="title">Project Overview</h2>
      <ProjectOwner />
      <ProjectDescription />
    </div>
  );
};

export default ProjectOverview;
