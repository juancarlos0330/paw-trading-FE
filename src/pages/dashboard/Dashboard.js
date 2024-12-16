import React from "react";

// import components
import DashboardCard from "../../components/dashboard/DashboardCard";
import ProjectCard from "../../components/dashboard/ProjectCard";
import TrendingProject from "../../components/dashboard/TrendingProject";
import ChainUpdate from "../../components/dashboard/ChainUpdate";
import ProjectList from "../../components/dashboard/ProjectList";
import ProjectNews from "../../components/dashboard/ProjectNews";

// import style
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="title">Dashboard</div>
      <DashboardCard />
      <TrendingProject />
      {/* <ProjectCard /> */}
      <ChainUpdate />
      {/* <ProjectList /> */}
      <div className="dashboard-page-notice">
        Could you please move it to
        <a href="#">where referenced above?</a>
      </div>
      <ProjectNews />
    </div>
  );
};

export default Dashboard;
