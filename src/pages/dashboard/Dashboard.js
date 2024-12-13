import React from "react";

// import components
import DashboardCard from "../../components/dashboard/DashboardCard";
import ProjectCard from "../../components/dashboard/ProjectCard";
import TrendingProject from "../../components/dashboard/TrendingProject";

// import style
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="title">Dashboard</div>
      <DashboardCard />
      <TrendingProject />
      <ProjectCard />
    </div>
  );
};

export default Dashboard;
