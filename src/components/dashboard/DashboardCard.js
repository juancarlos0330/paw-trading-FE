import React, { useState } from "react";

// import assets
import AvatarImg from "../../assets/image/avatar.jpeg";

// import style
import "./DashboardCard.scss";

// temp data
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const projectData = [{ id: 1 }, { id: 2 }, { id: 3 }];

const DashboardCard = () => {
  const [gainTab, setGainTab] = useState("gainer");

  return (
    <div className="dashboard-card-container">
      <div className="dashboard-card-item">
        <div className="dashboard-card-type">
          <div className="dashboard-card-type-view">
            <div
              className={`dashboard-card-type-view-item ${
                gainTab === "gainer" ? "active" : ""
              }`}
              onClick={() => setGainTab("gainer")}
            >
              Top Gainers
            </div>
            <div
              className={`dashboard-card-type-view-item ${
                gainTab === "looser" ? "active" : ""
              }`}
              onClick={() => setGainTab("looser")}
            >
              Top Loosers
            </div>
          </div>
          <a href="#" className="dashboard-card-type-more-btn">
            More
          </a>
        </div>
        <div className="dashboard-card-trans-view">
          {data.map((item, key) => {
            return (
              <div key={key} className="dashboard-card-trans-view-item">
                <p className="dashboard-card-trans-view-item-no">#{item.id}</p>
                <img
                  src={AvatarImg}
                  alt="avatar img"
                  className="dashboard-card-trans-view-item-img"
                />
                <p className="dashboard-card-trans-view-item-project">
                  <span>Sub project A/</span>
                  Abcdef
                </p>
                <p className="dashboard-card-trans-view-item-amount">0.013</p>
                <p className="dashboard-card-trans-view-item-increase">
                  3,256.23%
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dashboard-card-item">
        <div className="dashboard-card-title">
          <p className="dashboard-card-title-view">
            <p className="dashboard-card-title-view-title">
              Token Creator by Pro tools
            </p>
            <p className="dashboard-card-title-view-subtext">
              Safety for traders. Visibility for your projects
            </p>
          </p>
          <a href="#" className="dashboard-card-type-more-btn">
            More
          </a>
        </div>
        <div className="dashboard-card-project-view">
          {projectData.map((item, key) => {
            return (
              <div key={key} className="dashboard-card-project-view-item">
                <img
                  src={AvatarImg}
                  alt="avatar img"
                  className="dashboard-card-project-view-item-img"
                />
                <p className="dashboard-card-project-view-item-project">
                  Project A
                </p>
                <p className="dashboard-card-trans-view-item-date">
                  3 days ago
                </p>
                <p className="dashboard-card-trans-view-item-increase">ABC</p>
              </div>
            );
          })}
        </div>
        <div className="dashboard-card-project-btn">
          <button type="button">Create Token</button>
          <span>and update social info for free</span>
        </div>
      </div>
      <div className="dashboard-card-item">
        <div className="dashboard-card-title">
          <p className="dashboard-card-title-view">
            <p className="dashboard-card-title-view-title">
              Token Creator by Pro tools
            </p>
            <p className="dashboard-card-title-view-subtext">
              Safety for traders. Visibility for your projects
            </p>
          </p>
          <a href="#" className="dashboard-card-type-more-btn">
            More
          </a>
        </div>
        <div className="dashboard-card-project-view">
          {projectData.map((item, key) => {
            return (
              <div key={key} className="dashboard-card-project-view-item">
                <img
                  src={AvatarImg}
                  alt="avatar img"
                  className="dashboard-card-project-view-item-img"
                />
                <p className="dashboard-card-project-view-item-project">
                  Project A
                </p>
                <p className="dashboard-card-trans-view-item-date">
                  3 days ago
                </p>
                <p className="dashboard-card-trans-view-item-increase">ABC</p>
              </div>
            );
          })}
        </div>
        <div className="dashboard-card-project-btn">
          <button type="button">Create Token</button>
          <span>and update social info for free</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
