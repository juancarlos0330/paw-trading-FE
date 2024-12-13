import React from "react";

// import style
import "./AdminManagePost.scss";

const AdminManagePost = () => {
  return (
    <div className="admin-manage-post-container">
      <div className="admin-manage-post-title">Lastest Market Updates</div>
      <div className="admin-manage-post-view">
        Stay updated with the latest market trends and news. Our platform
        provides real-time data and analysis to help you make informed trading
        decisions. Whether you are a beginner or an experienced trader, our
        resources are designed to support your trading journey. Stay updated
        with the latest market trends and news. Our platform provides real-time
        data and analysis to help you make informed trading decisions. Whether
        you are a beginner or an experienced trader, our resources are designed
        to support your trading journey.
      </div>
      <div className="admin-manage-post-action">
        <a href="#" className="admin-manage-post-action-btn">
          Create Post
        </a>
        <a href="#" className="admin-manage-post-action-btn">
          Edit Post
        </a>
        <a href="#" className="admin-manage-post-action-btn">
          Delete Post
        </a>
      </div>
    </div>
  );
};

export default AdminManagePost;
