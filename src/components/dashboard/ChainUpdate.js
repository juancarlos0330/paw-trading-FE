import React from "react";

// import assets
import AvatarImg from "../../assets/image/avatar.jpeg";
import ProjectChartImg from "../../assets/image/project/project_chart.png";

// import style
import "./ChainUpdate.scss";

// temp data
const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

const ChainUpdate = () => {
  return (
    <div className="chain-update-container">
      <div className="chain-update-view">
        <div className="chain-update-view-title">PAW Chain Updates</div>
        <div className="chain-update-view-content">
          {data.map((item, index) => (
            <div className="chain-update-view-content-item" key={index}>
              <div className="chain-update-view-content-item-desc">
                <p className="chain-update-view-content-item-desc-title">
                  Update 1
                </p>
                <p className="chain-update-view-content-item-desc-text">New</p>
              </div>
              <div className="chain-update-view-content-item-timestamp">
                December 20, 2024
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chain-update-usage-view">
        <div className="chain-update-usage-view-title">API Data Usage</div>
        <div className="chain-update-usage-view-content">
          <img src={ProjectChartImg} alt="project chart" />
        </div>
      </div>
    </div>
  );
};

export default ChainUpdate;
