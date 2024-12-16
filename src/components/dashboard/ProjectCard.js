import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import {
  faCommentDots,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

// import style
import "./ProjectCard.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    id: 1,
    imgUrl:
      "https://cdn.prod.website-files.com/656b655e46ad5de96c49d14a/67100a7b39226bacb3680be4_Recap-7.webp",
  },
  {
    id: 2,
    imgUrl:
      "https://cdn.prod.website-files.com/656b655e46ad5de96c49d14a/6701be7ea5e5ee34de96e5e4_Add%20a%20heading%20(7)-p-500.webp",
  },
  {
    id: 3,
    imgUrl:
      "https://cdn.prod.website-files.com/656b655e46ad5de96c49d14a/66df1e6b093ac8f9936ab9dc_OP-p-500.webp",
  },
  {
    id: 4,
    imgUrl:
      "https://cdn.prod.website-files.com/656b655e46ad5de96c49d14a/66b2ad9e9af9aea6ae17f3a1_66aca962c790aff89be6fae6_fireblocks-coincover.png",
  },
  {
    id: 5,
    imgUrl:
      "https://cdn.prod.website-files.com/656b655e46ad5de96c49d14a/66b2b321cd96e18ad205347e_12.jpg",
  },
  {
    id: 6,
    imgUrl:
      "https://cdn.prod.website-files.com/656b655e46ad5de96c49d14a/66b2ad9fc689cb09fa7ab734_66819e0945b05c2419566baf_Untitled_design-94.png",
  },
  {
    id: 7,
    imgUrl:
      "https://cdn.prod.website-files.com/656b655e46ad5de96c49d14a/66b2b3384a733003681b9144_13.jpg",
  },
];

const ProjectCard = ({ title }) => {
  return (
    <div className="project-card-container">
      {title && (
        <div className="project-card-title">
          Project Cards
          <span className="sub-title">
            Projects with significant activity increases.
          </span>
        </div>
      )}

      <div className="project-card-view">
        <Swiper pagination slidesPerView={1} className="project-swiper">
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="/blogs/detail" className="project-card-swiper-item">
                <img
                  src={item.imgUrl}
                  alt="project"
                  className="project-card-swiper-project-img"
                />
                <div className="project-card-swiper-profile">
                  <div className="project-card-swiper-profile-view">
                    <p className="project-name">Project A</p>
                    {/* <p className="project-description">Abcdefgh</p> */}
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
