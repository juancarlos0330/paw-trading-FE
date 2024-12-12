import React from "react";

// import components
import VolumnChart from "../../components/overview/VolumnChart";
import TransactionStatistics from "../../components/overview/TransactionStatistics";
import ProjectBigChartView from "../../components/overview/ProjectBigChartView";
import ProjectCircleAnalysis from "../../components/overview/ProjectCircleAnalysis";

// import style
import "./AnalyticsDashboard.scss";

const AnalyticsDashboard = () => {
  return (
    <div className="analytics-dashboard-page">
      <h2 className="title">AnalyticsDashboard</h2>
      <div className="volumn-section">
        <div className="volumn-item">
          <VolumnChart title="" type="live" />
        </div>
        <div className="volumn-item">
          <VolumnChart title="" type="historical" />
        </div>
      </div>
      <TransactionStatistics />
      <ProjectBigChartView title="Token Performance" />
      <ProjectCircleAnalysis title="Holder Analysis" />
    </div>
  );
};

export default AnalyticsDashboard;
