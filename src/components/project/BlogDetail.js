import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// import icons
import {
  faHeart,
  faCommentDots,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

// import assets
import BlogAvatarImg from "../../assets/image/avatar.jpeg";
import BlogDetailImg from "../../assets/image/project/blogdetail.png";

// import style
import "./BlogDetail.scss";

const BlogDetail = () => {
  return (
    <div className="blog-detail-container">
      <div className="blog-detail-profile">
        <div className="blog-detail-profile-img">
          <img src={BlogAvatarImg} alt="blog avatar" />
        </div>
        <div className="blog-detail-profile-view">
          <div className="blog-detail-profile-name">Liam Smith</div>
          <div className="blog-detail-profile-date">5/19/12</div>
        </div>
      </div>
      <div className="blog-detail-view">
        <div className="blog-detail-view-img-section">
          <div className="blog-detail-view-img">
            <img src={BlogDetailImg} alt="blog detail" />
          </div>
          <p className="blog-detail-view-title">
            The Future of Bitcoin and Altcoins
          </p>
          <div className="blog-detail-view-reaction">
            <div className="blog-detail-view-reaction-item">
              <FontAwesomeIcon icon={faHeart} />
              120
            </div>
            <div className="blog-detail-view-reaction-item">
              <FontAwesomeIcon icon={faCommentDots} />
              20
            </div>
            <div className="blog-detail-view-reaction-item">
              <FontAwesomeIcon icon={faShare} />
              30
            </div>
          </div>
        </div>
        <div className="blog-detail-view-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, nisl in commodo egestas, sem eros blandit nisi, sit amet
          pulvinar nisl nunc id orci. Donec eget ex a leo posuere condimentum.
          Sed eget felis in urna elementum ultricies. Donec sed odio eget risus
          varius posuere. Donec ut semper tellus. Nullam efficitur, nisi eu
          ultricies ultrices, nunc nisl pretium nisi, nec tincidunt nisi nisl
          sit amet nunc. Donec eget ex a leo posuere condimentum. Sed eget felis
          in urna elementum ultricies. Donec sed odio eget risus varius posuere.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, nisl in commodo egestas, sem eros blandit nisi, sit amet
          pulvinar nisl nunc id orci. Donec eget ex a leo posuere condimentum.
          Sed eget felis in urna elementum ultricies. Donec sed odio eget risus
          varius posuere. Donec ut semper tellus. Nullam efficitur, nisi eu
          ultricies ultrices, nunc nisl pretium nisi, nec tincidunt nisi nisl
          sit amet nunc. Donec eget ex a leo posuere condimentum. Sed eget felis
          in urna elementum ultricies. Donec sed odio eget risus varius posuere.
        </div>
      </div>
      <div className="blog-detail-post-tags">
        <div className="blog-detail-post-tags-title">Post tags</div>
        <div className="blog-detail-post-tags-view">
          <div className="blog-detail-post-tags-view-item">Account</div>
          <div className="blog-detail-post-tags-view-item">Demo</div>
          <div className="blog-detail-post-tags-view-item">Market</div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
