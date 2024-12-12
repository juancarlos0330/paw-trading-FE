import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

// import icons
import {
  faHeart,
  faCommentDots,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

// import assets
import ProfileAvatarImg from "../../assets/image/avatar.jpeg";
import BlogImg from "../../assets/image/project/blog.jpg";

// import style
import "./FeaturedBlogs.scss";
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

const FeaturedBlogs = ({ title }) => {
  return (
    <div className="featured-blogs-container">
      {title && <div className="featured-blogs-title">{title}</div>}
      <div className="featured-blogs-view">
        <Swiper pagination slidesPerView={1} className="project-swiper">
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="/blogs/detail" className="featured-blogs-view-item">
                <div className="featured-blogs-view-item-profile">
                  <div className="featured-blogs-view-item-profile-img">
                    <img src={ProfileAvatarImg} alt="featured-blog-profile" />
                  </div>
                  <div className="featured-blogs-view-item-profile-view">
                    <p className="featured-blogs-view-item-profile-name">
                      Ralph Edwards
                    </p>
                    <p className="featured-blogs-view-item-profile-date">
                      5/19/12
                    </p>
                  </div>
                </div>
                <div className="featured-blogs-view-item-content">
                  <div className="featured-blogs-view-item-content-img">
                    <img src={BlogImg} alt="Blog" />
                  </div>
                  <div className="featured-blogs-view-item-content-title">
                    The Future of Bitcoin and Altcoins
                  </div>
                  <div className="featured-blogs-view-item-content-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                    Suspendisse malesuada
                  </div>
                  <div className="featured-blogs-view-item-icons-group">
                    <div className="featured-blogs-view-item-icon">
                      <FontAwesomeIcon icon={faHeart} />
                      150
                    </div>
                    <div className="featured-blogs-view-item-icon">
                      <FontAwesomeIcon icon={faCommentDots} />
                      20
                    </div>
                    <div className="featured-blogs-view-item-icon">
                      <FontAwesomeIcon icon={faShare} />
                      30
                    </div>
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

export default FeaturedBlogs;
