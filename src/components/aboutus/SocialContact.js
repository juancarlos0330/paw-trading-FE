import React from "react";

// import assets
import TwitterImg from "../../assets/image/social/twitter.png";
import InstagramImg from "../../assets/image/social/instagram.png";
import FacebookImg from "../../assets/image/social/facebook.png";
import LinkedinImg from "../../assets/image/social/linkedin.png";

// import style
import "./SocialContact.scss";

const SocialContact = () => {
  return (
    <div className="social-contact-container">
      <div className="social-contact-section">
        <div className="social-contact-section-title">
          Find Us On Social Media
        </div>
        <div className="social-contact-section-view">
          <a href="#" className="social-contact-item">
            <img src={LinkedinImg} alt="linkedin" />
          </a>
          <a href="#" className="social-contact-item">
            <img src={TwitterImg} alt="twitter" />
          </a>
          <a href="#" className="social-contact-item">
            <img src={InstagramImg} alt="instagram" />
          </a>
          <a href="#" className="social-contact-item">
            <img src={FacebookImg} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialContact;
