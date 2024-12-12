import React from "react";

import ProjectChartView from "./ProjectChartView";

// import style
import "./ProjectView.scss";

// temp data
const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const ProjectView = () => {
  return (
    <div className="project-view-container">
      <div className="project-view-title">Overview</div>
      <div className="project-view-view">
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
        <div className="project-view-item">
          <p className="project-view-item-title">$1.2B</p>
          <p className="project-view-item-content">Total Value Locked</p>
        </div>
      </div>
      <div className="project-chart-view">
        {data.map((item, index) => {
          return <ProjectChartView key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectView;
