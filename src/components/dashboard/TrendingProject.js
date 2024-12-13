import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import assets
import AvatarImg from "../../assets/image/avatar.jpeg";
import ProjectImg from "../../assets/image/project/project_blog.png";

// import style
import "./TrendingProject.scss";
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
  { id: 1 },
];

const TrendingProject = () => {
  return (
    <div className="trending-project-container">
      <div className="trending-project-title">
        Trending Projects
        <span className="sub-title">
          Projects with significant activity increases.
        </span>
      </div>
      <div className="trending-project-view">
        <Swiper pagination slidesPerView={1} className="project-swiper">
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="/blogs/detail" className="trending-project-swiper-item">
                <div className="trending-project-swiper-profile">
                  <img
                    src={AvatarImg}
                    alt=""
                    className="trending-project-swiper-profile-img"
                  />
                  <div className="trending-project-swiper-profile-view">
                    <p className="project-name">Project A</p>
                    <p className="project-description">
                      Activity up by 45% Activity up by 45% Activity up by 45%
                    </p>
                  </div>
                </div>
                <div className="trending-project-swiper-content">
                  <p className="trending-project-swiper-content-desc">
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                    Suspendisse masss bibendum urna. Lorem psum dolo sitfefe
                    amet, consectetur adipiscing elit. Suspe malesuada bibess
                    urnas urna bibendu urna bibendu urna bibee.
                  </p>
                  <div className="trending-project-swiper-content-desc-view">
                    <p className="trending-project-swiper-content-desc-view-title">
                      $150
                    </p>
                    <p className="trending-project-swiper-content-desc-view-value">
                      +45%
                    </p>
                  </div>
                </div>
                <img
                  src={ProjectImg}
                  alt="project"
                  className="trending-project-swiper-project-img"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingProject;
