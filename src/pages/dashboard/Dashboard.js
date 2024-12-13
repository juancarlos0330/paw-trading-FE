import React from "react";

// import components
import DashboardCard from "../../components/dashboard/DashboardCard";

// import style
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="title">Dashboard</div>
      <DashboardCard />
    </div>
  );
};

export default Dashboard;
