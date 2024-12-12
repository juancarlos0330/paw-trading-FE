import React from "react";

// import assets
import ProjectChartImg from "../../assets/image/chart/project_chart.png";

// import style
import "./ProjectChartView.scss";

const ProjectChartView = () => {
  return (
    <div className="project-chart-view-item">
      <div className="project-chart-view-item-title">Total V alue Locked</div>
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
};

export default ProjectChartView;
