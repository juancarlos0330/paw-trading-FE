import React from "react";

// import assets
import BlockBlogImg from "../../assets/image/project/block_blog.png";

// import style
import "./ProjectBlocks.scss";

const ProjectBlocks = ({ title }) => {
  return (
    <div className="project-blocks-container">
      <div className="project-blocks-title">{title}</div>
      <div className="project-blocks-subtitle">
        Read the latest posts from various projects.
      </div>
      <div className="project-blocks-view">
        <div className="project-blocks-item">
          <div className="project-blocks-item-img">
            <img src={BlockBlogImg} alt="block blog" />
          </div>
          <div className="project-blocks-item-content">
            <div className="project-blocks-item-content-title">Blog Post 1</div>
            <div className="project-blocks-item-content-text">
              Lastest Updates on Project Blogs and Blog Posts from various
              projects.
            </div>
            <a
              href="/blogs/detail"
              className="project-blocks-item-content-link"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="project-blocks-item">
          <div className="project-blocks-item-img">
            <img src={BlockBlogImg} alt="block blog" />
          </div>
          <div className="project-blocks-item-content">
            <div className="project-blocks-item-content-title">Blog Post 1</div>
            <div className="project-blocks-item-content-text">
              Lastest Updates on Project Blogs and Blog Posts from various
              projects.
            </div>
            <a
              href="/blogs/detail"
              className="project-blocks-item-content-link"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlocks;
