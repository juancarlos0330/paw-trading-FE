import React, { useState } from "react";

// import components
import VolumnChart from "../../components/overview/VolumnChart";
import TransactionStatistics from "../../components/overview/TransactionStatistics";
import GasFees from "../../components/overview/GasFees";
import ProjectExplorer from "../../components/overview/ProjectExplorer";
import ProjectSwiper from "../../components/overview/ProjectSwiper";

// import style
import "./ChainOverview.scss";

const ChainOverview = () => {
  const [tab, setTab] = useState("trending");

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
      <div className="highlighted-section">
        <div className="highlighted-section-title">Highlighted Projects</div>
        <div className="highlighted-section-type-view">
          <div
            className={`highlighted-section-type-view-item ${
              tab === "trending" ? "active" : ""
            }`}
            onClick={() => setTab("trending")}
          >
            Trending
          </div>
          <div
            className={`highlighted-section-type-view-item ${
              tab === "new" ? "active" : ""
            }`}
            onClick={() => setTab("new")}
          >
            New
          </div>
          <div
            className={`highlighted-section-type-view-item ${
              tab === "notable" ? "active" : ""
            }`}
            onClick={() => setTab("notable")}
          >
            Notable
          </div>
        </div>
        <ProjectSwiper />
      </div>
    </div>
  );
};

export default ChainOverview;
