import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import style
import "./ProjectSwiper.scss";
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

const ProjectSwiper = () => {
  return (
    <>
      <Swiper pagination slidesPerView={1} className="project-swiper">
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="project-swiper-item">
              <div className="project-swiper-item-content">
                <img
                  src={item.img}
                  alt=""
                  className="project-swiper-item-img"
                />
                <div className="project-swiper-item-title">{item.title}</div>
                <div className="project-swiper-item-content">
                  {item.content}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectSwiper;
