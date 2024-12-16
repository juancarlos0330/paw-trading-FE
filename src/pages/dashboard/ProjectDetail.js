import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import {
  faGlobe,
  faCircleInfo,
  faExternalLink,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

// import assets
import ProjectChartImg from "../../assets/image/chart/project_big_chart.png";

// import style
import "./ProjectDetail.scss";

const ProjectDetail = () => {
  const [tab, setTab] = useState("1d");

  return (
    <div className="project-detail-page">
      <div className="title">Project detail</div>
      <div className="project-detail-section">
        <div className="project-detail-left-section">
          <div className="project-detail-header">
            <div className="project-detail-header-img">
              <img
                src="https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/6546d7e9bfc56f4a35873ae0_NEW%20FINAL%20REBRANDED%20LOGO-p-500.png"
                alt="logo"
              />
              <div className="project-detail-header-img-title">
                <p className="project-detail-header-img-title-bold">PAW</p>
                <p className="project-detail-header-img-subtitle">PAW</p>
              </div>
            </div>
            <div className="project-detail-header-content">
              <a href="#" className="project-detail-header-content-trans">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
              <a href="#" className="project-detail-header-content-trans">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
              <a href="#" className="project-detail-header-content-trans">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
              <p className="project-detail-header-content-count">+2</p>
              <p className="project-detail-header-content-number">Read #724</p>
            </div>
          </div>
          <div className="project-detail-content">
            <div className="project-detail-content-view">
              <div className="project-detail-content-item">
                <div className="project-detail-content-title">
                  Current price
                </div>
                <div className="project-detail-content-price">
                  <p className="project-detail-content-price-token">
                    $0.0000000294
                  </p>
                  <p className="project-detail-content-price-percent">
                    -0.34% (-{"<"} $0.000000001)
                  </p>
                </div>
              </div>
              <div className="project-detail-content-type">
                <div
                  className={`project-detail-content-type-item ${
                    tab === "1d" ? "active" : ""
                  }`}
                  onClick={() => setTab("1d")}
                >
                  1d
                </div>
                <div
                  className={`project-detail-content-type-item ${
                    tab === "7d" ? "active" : ""
                  }`}
                  onClick={() => setTab("7d")}
                >
                  7d
                </div>
                <div
                  className={`project-detail-content-type-item ${
                    tab === "30d" ? "active" : ""
                  }`}
                  onClick={() => setTab("30d")}
                >
                  30d
                </div>
                <div
                  className={`project-detail-content-type-item ${
                    tab === "180d" ? "active" : ""
                  }`}
                  onClick={() => setTab("180d")}
                >
                  180d
                </div>
                <div
                  className={`project-detail-content-type-item ${
                    tab === "1y" ? "active" : ""
                  }`}
                  onClick={() => setTab("1y")}
                >
                  1y
                </div>
                <div
                  className={`project-detail-content-type-item ${
                    tab === "all" ? "active" : ""
                  }`}
                  onClick={() => setTab("all")}
                >
                  All
                </div>
              </div>
            </div>
            <div className="project-detail-content-range">
              <div className="project-detail-content-range-title">
                Low to high range (week)
              </div>
              <div className="project-detail-content-range-progress">
                <div className="project-detail-content-range-progress-bar">
                  <div className="project-detail-content-range-progress-bar-value"></div>
                </div>
                <div className="project-detail-content-range-progress-value">
                  <p>$0.0000000294</p>
                  <p>$0.0000000312</p>
                </div>
              </div>
            </div>
            <img
              src={ProjectChartImg}
              alt="project chart"
              className="project-detail-content-chart-img"
            />
            <div className="project-detail-content-result">
              <div className="project-detail-content-result-item">
                <p>1h</p>
                <p>-</p>
              </div>
              <div className="project-detail-content-result-item">
                <p>24h</p>
                <p className="minus">-0.34%</p>
              </div>
              <div className="project-detail-content-result-item">
                <p>7d</p>
                <p className="plus">+52.3%</p>
              </div>
              <div className="project-detail-content-result-item">
                <p>30d</p>
                <p className="plus">+237.52%</p>
              </div>
              <div className="project-detail-content-result-item">
                <p>1y</p>
                <p>-</p>
              </div>
            </div>
            <div className="project-detail-content-cap">
              <div className="project-detail-content-cap-item">
                <div className="project-detail-content-cap-item-header">
                  <p>Total Supply</p>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <p className="project-detail-content-cap-item-value">1P</p>
              </div>
              <div className="project-detail-content-cap-item">
                <div className="project-detail-content-cap-item-header">
                  <p>Fully claimed market cap</p>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <p className="project-detail-content-cap-item-value">$32.81M</p>
              </div>
              <div className="project-detail-content-cap-item">
                <div className="project-detail-content-cap-item-header">
                  <p>Claimed market cap</p>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <p className="project-detail-content-cap-item-value">1P</p>
              </div>
              <div className="project-detail-content-cap-item">
                <div className="project-detail-content-cap-item-header">
                  <p>24h Volumn</p>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <p className="project-detail-content-cap-item-value">$1.11M</p>
              </div>
              <div className="project-detail-content-cap-item">
                <div className="project-detail-content-cap-item-header">
                  <p>All-Time high</p>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <p className="project-detail-content-cap-item-value">
                  $0.0000000796
                </p>
              </div>
              <div className="project-detail-content-cap-item">
                <div className="project-detail-content-cap-item-header">
                  <p>All-Time low</p>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <p className="project-detail-content-cap-item-value">
                  {"<"} $0.0000000001
                </p>
              </div>
            </div>
            <div className="project-detail-content-timestamp">
              <FontAwesomeIcon icon={faCircleInfo} />
              <p className="project-detail-content-timestamp-text">
                47 seconds ago
              </p>
            </div>
          </div>
          <div className="project-detail-information">
            <div className="project-detail-info-title">PAW live price date</div>
            <div className="project-detail-info-view">
              <div className="project-detail-info-view-item">
                <p className="project-detail-info-view-item-title">Website</p>
                <a href="#" className="project-detail-info-view-item-value">
                  https://paw.finance <FontAwesomeIcon icon={faExternalLink} />
                </a>
              </div>
              <div className="project-detail-info-view-item">
                <p className="project-detail-info-view-item-title">Token ID</p>
                <button
                  type="button"
                  className="project-detail-info-view-item-value button"
                >
                  12534 <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
              <div className="project-detail-info-view-item-big">
                <p className="project-detail-info-view-item-title">Token ID</p>
                <a href="#" className="project-detail-info-view-item-value">
                  0x55d398326f99059ff775485246999027b3197955{" "}
                  <FontAwesomeIcon icon={faCopy} />
                </a>
                <div className="project-detail-info-view-item-button">
                  <FontAwesomeIcon icon={faExternalLink} />
                  <button type="button">See all</button>
                </div>
              </div>
            </div>
          </div>
          <div className="project-detail-desc">
            <div className="project-detail-desc-title">PAW live price date</div>
            <div className="project-detail-desc-view">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper, nisl in commodo egestas, sem eros blandit nisi, sit
              amet pulvinar nisl nunc id orci. Donec eget ex a leo posuere
              condimentum. Sed eget felis in urna elementum ultricies. Donec sed
              odio eget risus varius posuere. Donec ut semper tellus. Nullam
              efficitur, nisi eu
            </div>
          </div>
        </div>
        <div className="project-detail-right-section">
          <div className="project-detail-buy">
            <button type="button" className="project-detail-buy-btn">
              Buy PAW
            </button>
            <div className="project-detail-buy-view">
              <div className="project-detail-buy-view-item">
                <FontAwesomeIcon icon={faCircleInfo} />
                <div className="project-detail-buy-view-item-text">
                  <p className="project-detail-buy-view-item-text-title">
                    Market Support
                  </p>
                  <p className="project-detail-buy-view-item-text-value">
                    24/7 hours
                  </p>
                </div>
              </div>
              <div className="project-detail-buy-view-item">
                <FontAwesomeIcon icon={faCircleInfo} />
                <div className="project-detail-buy-view-item-text">
                  <p className="project-detail-buy-view-item-text-title">
                    Market Support
                  </p>
                  <p className="project-detail-buy-view-item-text-value">
                    24/7 hours
                  </p>
                </div>
              </div>
              <div className="project-detail-buy-view-item">
                <FontAwesomeIcon icon={faCircleInfo} />
                <div className="project-detail-buy-view-item-text">
                  <p className="project-detail-buy-view-item-text-title">
                    Market Support
                  </p>
                  <p className="project-detail-buy-view-item-text-value">
                    24/7 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-detail-social">
            <div className="project-detail-social-title">Socials</div>
            <div className="project-detail-social-view">
              <a href="#" className="project-detail-social-view-item">
                <img
                  src="https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/65036eca465310f0f8161e5f_discord-p-500.png"
                  alt="discord"
                />
              </a>
              <a href="#" className="project-detail-social-view-item">
                <img
                  src="https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/65036eca465310f0f8161e59_telegram-p-500.png"
                  alt="telegram"
                />
              </a>
              <a href="#" className="project-detail-social-view-item">
                <img
                  src="https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/65036eca465310f0f8161e68_Twitter%2520X-p-500.png"
                  alt="twitter"
                />
              </a>
              <a href="#" className="project-detail-social-view-item">
                <img
                  src="https://cdn.prod.website-files.com/65035c85edfbbecd98169f8d/65036eca465310f0f8161e65_medium-p-500.png"
                  alt="medium"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
