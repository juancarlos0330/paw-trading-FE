import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import {
  faCommentDots,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

// import assets
import AvatarImg from "../../assets/image/avatar.jpeg";
import ProjectCardImg from "../../assets/image/project/project_card.png";

// import style
import "./ProjectCard.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
];

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="project-card-title">
        Project Cards
        <span className="sub-title">
          Projects with significant activity increases.
        </span>
      </div>
      <div className="project-card-view">
        <Swiper pagination slidesPerView={1} className="project-swiper">
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="/blogs/detail" className="project-card-swiper-item">
                <img
                  src={ProjectCardImg}
                  alt="project"
                  className="project-card-swiper-project-img"
                />
                <div className="project-card-swiper-profile">
                  <div className="project-card-swiper-profile-view">
                    <p className="project-name">Project A</p>
                    <p className="project-description">Abcdefgh</p>
                  </div>
                  <p className="project-card-swiper-profile-view-date">
                    1hr ago
                  </p>
                </div>
                <div className="project-card-swiper-content">
                  <p className="project-card-swiper-content-desc">
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                    Suspendisse masss bibendum urna. Lorem psum dolo sitfefe
                    amet, consectetur adipiscing elit. Suspe malesuada bibess
                    urnas urna bibendu urna bibendu urna bibee.
                  </p>
                  <div className="project-card-swiper-content-desc-view">
                    <p className="project-card-swiper-content-desc-view-item">
                      <FontAwesomeIcon icon={faHeart} />
                      150
                    </p>
                    <p className="project-card-swiper-content-desc-view-item">
                      <FontAwesomeIcon icon={faCommentDots} />
                      150
                    </p>
                    <p className="project-card-swiper-content-desc-view-item">
                      <FontAwesomeIcon icon={faShare} />
                      150
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCard;
