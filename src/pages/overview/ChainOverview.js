import React from "react";

// import components
import VolumnChart from "../../components/overview/VolumnChart";
import TransactionStatistics from "../../components/overview/TransactionStatistics";
import GasFees from "../../components/overview/GasFees";
import ProjectExplorer from "../../components/overview/ProjectExplorer";

// import style
import "./ChainOverview.scss";

const ChainOverview = () => {
  return (
    <div className="chain-overview-page">
      <h2 className="title">Chain Overview</h2>
      <div className="volumn-section">
        <div className="volumn-item">
          <VolumnChart title="Live Volumn" type="live" />
        </div>
        <div className="volumn-item">
          <VolumnChart title="Historical Volumn" type="historical" />
        </div>
      </div>
      <TransactionStatistics />
      <GasFees />
      <ProjectExplorer />
    </div>
  );
};

export default ChainOverview;
