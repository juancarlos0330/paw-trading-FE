import React from "react";

// import assets
import ProjectCircleChartImg from "../../assets/image/chart/circle_chart.png";

// import style
import "./ProjectCircleAnalysis.scss";

const ProjectCircleAnalysis = ({ title }) => {
  return (
    <div className="project-circle-chart-view-item">
      {title && (
        <div className="project-circle-chart-view-item-title">{title}</div>
      )}

      <div className="project-circle-chart-view-item-content">
        <img
          className="project-circle-chart-view-item-content-img"
          src={ProjectCircleChartImg}
        />
      </div>
    </div>
  );
};

export default ProjectCircleAnalysis;
