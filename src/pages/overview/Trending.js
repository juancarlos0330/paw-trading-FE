import React from "react";

// import components
import GainerCard from "../../components/overview/GainerCard";
import ProjectBigChartView from "../../components/overview/ProjectBigChartView";
import ProjectSwiper from "../../components/overview/ProjectSwiper";
import ProjectBlocks from "../../components/overview/ProjectBlocks";

// import style
import "./Trending.scss";

const Trending = () => {
  return (
    <div className="trending-page">
      <div className="title">Trending & Highlights</div>
      <div className="trending-section">
        <div className="trending-section-title">Highlighted Projects</div>
        <ProjectSwiper />
      </div>
      <div className="trending-section">
        <div className="trending-section-title">Highlighted Projects</div>
        <ProjectSwiper />
      </div>
      <div className="trending-gainer-section">
        <div className="trending-gainer-section-title">
          Top Gainers & Losers
        </div>
        <div className="trending-gainer-card-view">
          <GainerCard title="Top Gainers" />
          <GainerCard title="Top Losers" />
        </div>
      </div>
      <ProjectBigChartView title="API Data Usage" />
      <ProjectBlocks title="Recent Project Blocks" />
      <div className="trending-section">
        <div className="trending-section-other-title">PAW Chain Updates</div>
        <ProjectSwiper />
      </div>
    </div>
  );
};

export default Trending;
