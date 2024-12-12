import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

// import assets
import PostBlogImg from "../../assets/image/project/post.png";

// import icons
import {
  faHeart,
  faCommentDots,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

// import style
import "./ProjectPosts.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    id: 1,
    title: "Live Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
  {
    id: 2,
    title: "Historical Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
  {
    id: 3,
    title: "Live Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
  {
    id: 4,
    title: "Historical Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
  {
    id: 4,
    title: "Historical Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
  {
    id: 4,
    title: "Historical Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
  {
    id: 4,
    title: "Historical Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
  {
    id: 4,
    title: "Historical Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
  {
    id: 4,
    title: "Historical Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
  {
    id: 4,
    title: "Historical Volumn",
    content: "1,000,000,000 PAW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d6lhXaiF9Qf6fK1GRF421etV5EpGvk_X_78nQXlKb3qq4O-D",
  },
];

const ProjectPosts = ({ title }) => {
  return (
    <div className="project-posts-container">
      {title && <div className="project-posts-title">{title}</div>}
      <div className="project-posts-view">
        <Swiper pagination slidesPerView={1} className="project-swiper">
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="project-posts-view-item">
                <div className="project-posts-view-item-img">
                  <img src={PostBlogImg} alt="post blog image" />
                </div>
                <div className="project-posts-view-item-content">
                  <div className="project-posts-view-item-content-title">
                    News Name
                  </div>
                  <div className="project-posts-view-item-content-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                    Suspendisse malesuada
                  </div>
                  <div className="project-posts-view-item-icons-group">
                    <div className="project-posts-view-item-icon">
                      <FontAwesomeIcon icon={faHeart} />
                      150
                    </div>
                    <div className="project-posts-view-item-icon">
                      <FontAwesomeIcon icon={faCommentDots} />
                      20
                    </div>
                    <div className="project-posts-view-item-icon">
                      <FontAwesomeIcon icon={faShare} />
                      30
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectPosts;
