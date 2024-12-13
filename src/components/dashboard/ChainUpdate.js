import React from "react";

// import assets
import AvatarImg from "../../assets/image/avatar.jpeg";
import ProjectChartImg from "../../assets/image/project/project_chart.png";

// import style
import "./ChainUpdate.scss";

const ChainUpdate = () => {
  return (
    <div className="chain-update-container">
      <div className="chain-update-view">
        <div className="chain-update-view-title">PAW Chain Updates</div>
        <div className="chain-update-view-content">
          <div className="chain-update-view-content-item">
            <img
              className="chain-update-view-content-item-img"
              src={AvatarImg}
              alt="chain update"
            />
            <div className="chain-update-view-content-item-desc">
              <p className="chain-update-view-content-item-desc-title">
                Update 1
              </p>
              <p className="chain-update-view-content-item-desc-text">New</p>
            </div>
          </div>
          <div className="chain-update-view-content-item">
            <img
              className="chain-update-view-content-item-img"
              src={AvatarImg}
              alt="chain update"
            />
            <div className="chain-update-view-content-item-desc">
              <p className="chain-update-view-content-item-desc-title">
                Update 1
              </p>
              <p className="chain-update-view-content-item-desc-text">New</p>
            </div>
          </div>
          <div className="chain-update-view-content-item">
            <img
              className="chain-update-view-content-item-img"
              src={AvatarImg}
              alt="chain update"
            />
            <div className="chain-update-view-content-item-desc">
              <p className="chain-update-view-content-item-desc-title">
                Update 1
              </p>
              <p className="chain-update-view-content-item-desc-text">New</p>
            </div>
          </div>
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