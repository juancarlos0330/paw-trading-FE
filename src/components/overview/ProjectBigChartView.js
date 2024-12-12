import React from "react";

// import assets
import ProjectChartImg from "../../assets/image/chart/project_big_chart.png";

// import style
import "./ProjectBigChartView.scss";

const ProjectBigChartView = ({ type, title }) => {
  return (
    <div
      className={`project-big-chart-view-item ${type === "big" ? "big" : ""}`}
    >
      {title && (
        <div className="project-big-chart-view-item-title">{title}</div>
      )}

      <div className="project-big-chart-view-item-content">
        <p className="project-big-chart-view-item-content-title">
          Price Performance
        </p>
        <p className="project-big-chart-view-item-content-value">$ 500</p>
        <p className="project-big-chart-view-item-content-type">
          Today <span>+2%</span>
        </p>
        <img
          className="project-big-chart-view-item-content-img"
          src={ProjectChartImg}
          alt="project chart"
        />
      </div>
    </div>
  );
};

export default ProjectBigChartView;
