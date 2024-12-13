import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// import assets
import PostBlogImg from "../../assets/image/avatar.jpeg";

// import style
import "./AdminPosts.scss";

const AdminPosts = () => {
  return (
    <div className="admin-posts-container">
      <div className="admin-posts-title">Posts</div>
      <div className="admin-posts-view">
        <div className="admin-posts-view-item">
          <div className="admin-posts-view-item-img">
            <img src={PostBlogImg} alt="post blog image" />
          </div>
          <div className="admin-posts-view-item-content">
            <div className="admin-posts-view-item-content-title">
              New Features in 2022
            </div>
            <div className="admin-posts-view-item-content-date">
              Published On 05/19/2022
            </div>
          </div>
          <div className="admin-posts-view-item-btn">
            <button type="button">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
        </div>
        <div className="admin-posts-view-item">
          <div className="admin-posts-view-item-img">
            <img src={PostBlogImg} alt="post blog image" />
          </div>
          <div className="admin-posts-view-item-content">
            <div className="admin-posts-view-item-content-title">
              New Features in 2022
            </div>
            <div className="admin-posts-view-item-content-date">
              Published On 05/19/2022
            </div>
          </div>
          <div className="admin-posts-view-item-btn">
            <button type="button">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
        </div>
        <div className="admin-posts-view-item">
          <div className="admin-posts-view-item-img">
            <img src={PostBlogImg} alt="post blog image" />
          </div>
          <div className="admin-posts-view-item-content">
            <div className="admin-posts-view-item-content-title">
              New Features in 2022
            </div>
            <div className="admin-posts-view-item-content-date">
              Published On 05/19/2022
            </div>
          </div>
          <div className="admin-posts-view-item-btn">
            <button type="button">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPosts;
