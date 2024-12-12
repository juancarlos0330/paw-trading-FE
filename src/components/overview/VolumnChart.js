import React, { useState } from "react";

// import assets
import LiveVolumnImg from "../../assets/image/chart/live.png";
import HistoricalVolumnImg from "../../assets/image/chart/historical.png";

// import style
import "./VolumnChart.scss";

const VolumnChart = ({ title, type }) => {
  const [tab, setTab] = useState("today");

  return (
    <div className="volumn-chart-container">
      {title && <h2 className="volumn-chart-title">{title}</h2>}
      <div className="volumn-chart-tabs">
        <div
          className={`tab-item ${tab === "today" ? "active" : ""}`}
          onClick={() => setTab("today")}
        >
          <div className="tab-title">Today</div>
          <div className="tab-value">Oct-01</div>
        </div>
        <div
          className={`tab-item ${tab === "7days" ? "active" : ""}`}
          onClick={() => setTab("7days")}
        >
          <div className="tab-title">7-Days</div>
          <div className="tab-value">Oct-07</div>
        </div>
        <div
          className={`tab-item ${tab === "30days" ? "active" : ""}`}
          onClick={() => setTab("30days")}
        >
          <div className="tab-title">30-Days</div>
          <div className="tab-value">Oct-30</div>
        </div>
        <div
          className={`tab-item ${tab === "custom" ? "active" : ""}`}
          onClick={() => setTab("custom")}
        >
          <div className="tab-title">Custom</div>
          <div className="tab-value">Custom</div>
        </div>
      </div>
      <div className="volumn-live-chart">
        <div className="volumn-live-chart-value">
          <p className="volumn-live-chart-value-title">{title}</p>
          <p className="volumn-live-chart-value-average">4500 kwh</p>
          <p className="volumn-live-chart-value-plus">
            Today <span className="plus">+15%</span>
          </p>
        </div>
        <img
          src={type === "live" ? LiveVolumnImg : HistoricalVolumnImg}
          alt="live volumn"
          className="volumn-live-chart-image"
        />
      </div>
    </div>
  );
};

export default VolumnChart;
