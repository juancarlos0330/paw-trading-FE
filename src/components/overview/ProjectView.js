import React from "react";

// import assets
import ProjectChartImg from "../../assets/image/chart/project_chart.png";

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
          return (
            <div className="project-chart-view-item">
              <div className="project-chart-view-item-title">
                Total V alue Locked
              </div>
              <div className="project-chart-view-item-content">
                <p className="project-chart-view-item-content-title">
                  Total Value Locked
                </p>
                <p className="project-chart-view-item-content-value">$1.2B</p>
                <p className="project-chart-view-item-content-type">
                  Today <span>+5%</span>
                </p>
                <img
                  className="project-chart-view-item-content-img"
                  src={ProjectChartImg}
                  alt="project chart"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectView;
