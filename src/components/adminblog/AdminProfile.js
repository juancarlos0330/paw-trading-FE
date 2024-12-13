import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import {
  faPhone,
  faCommentDots,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

// import assets
import AdminProfileImg from "../../assets/image/blog/avatar.png";

// import style
import "./AdminProfile.scss";

const AdminProfile = () => {
  return (
    <div className="admin-blog-profile">
      <div className="admin-blog-profile-img">
        <img src={AdminProfileImg} alt="admin profile" />
      </div>
      <div className="admin-blog-profile-view">
        <div className="admin-blog-profile-name">Jane Cooper</div>
        <div className="admin-blog-profile-intro">
          Experienced trader specializing in stocks and cryptocurrencies. <br />
          Sharing insights and strategies to help you succeed in the market.
        </div>
        <div className="admin-blog-profile-follow">
          <div className="admin-blog-profile-follow-item">
            <p className="admin-blog-profile-follow-item-count">1.5K</p>
            <p className="admin-blog-profile-follow-item-text">Followers</p>
          </div>
          <div className="admin-blog-profile-follow-item">
            <p className="admin-blog-profile-follow-item-count">100</p>
            <p className="admin-blog-profile-follow-item-text">Following</p>
          </div>
          <div className="admin-blog-profile-follow-item">
            <p className="admin-blog-profile-follow-item-count">40</p>
            <p className="admin-blog-profile-follow-item-text">Posts</p>
          </div>
        </div>
        <div className="admin-blog-profile-call">
          <a href="#" className="admin-blog-profile-call-btn">
            <FontAwesomeIcon icon={faCommentDots} />
            Chat
          </a>
          <a href="#" className="admin-blog-profile-call-btn">
            <FontAwesomeIcon icon={faPhone} />
            Call
          </a>
          <a href="#" className="admin-blog-profile-call-btn">
            <FontAwesomeIcon icon={faPlus} />
            Follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
