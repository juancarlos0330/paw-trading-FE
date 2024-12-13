import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import assets
import AvatarImg from "../../assets/image/avatar.jpeg";

// import icons
import { faStar, faUser, faSort } from "@fortawesome/free-solid-svg-icons";

// import style
import "./ProjectList.scss";

// temp data
const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const ProjectList = () => {
  return (
    <div className="project-list-container">
      <div className="project-list-type">
        <div className="project-list-type-item">Hot Pairs</div>
        <div className="project-list-type-item">Pairs</div>
        <div className="project-list-type-item">Token creator</div>
        <div className="project-list-type-item">Exchange</div>
        <div className="project-list-type-item">New socials</div>
        <div className="project-list-type-item">Token unlocks</div>
      </div>
      <div className="project-list-table">
        {data.map((item, key) => {
          return (
            <a
              href="/blogs/detail"
              className="project-list-table-item"
              key={key}
            >
              <div className="project-list-table-item-pair">
                <FontAwesomeIcon icon={faStar} />1
                <FontAwesomeIcon icon={faUser} />
                <div className="project-list-table-item-pair-desc">
                  <p className="project-name">Sub project C/</p>
                  <p className="username">Abcded</p>
                </div>
              </div>
              <img
                className="project-list-table-item-img"
                src={AvatarImg}
                alt="project"
              />
              <div className="project-list-table-item-price">$0.03568</div>
              <div className="project-list-table-item-1h">
                <FontAwesomeIcon icon={faSort} />
                $0.03568
              </div>
              <div className="project-list-table-item-24h">
                <FontAwesomeIcon icon={faSort} />
                25.12%+
              </div>
              <div className="project-list-table-item-24hvolumn">497</div>
              <div className="project-list-table-item-24hvolumn">$1.03 M</div>
              <div className="project-list-table-item-24hvolumn">$41.03 K</div>
              <div className="project-list-table-item-24h">$400.03 K</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
