import React from "react";

// import assets
import ProjectBlogImg from "../../assets/image/project/project_card.png";
import FacebookImg from "../../assets/image/social/facebook.png";
import TwitterImg from "../../assets/image/social/twitter.png";
import LinkedinImg from "../../assets/image/social/linkedin.png";
import InstagramImg from "../../assets/image/social/instagram.png";

// import style
import "./ProjectNews.scss";

const ProjectNews = () => {
  return (
    <div className="project-news-container">
      <div className="project-news-header">
        <div className="project-news-header-big">
          <div className="project-news-title">
            Get news about cryptocurrencies every day!
          </div>
          <div className="project-news-subtitle">
            Be part of ABCD Force community! The premium community of PROJECT
          </div>
          <div className="project-news-description">
            A group of elite traders and investors focused on DeFi. You can join
            now our exclusive Telegram and get all community benefits including
            contests, investing tips and advanced market info. There are 3
            tiers:
          </div>
        </div>
        <div className="project-news-header-small">
          <div className="project-news-header-small-title">
            Follow us on social media!
          </div>
          <div className="project-news-header-small-description">
            Follow us on social media and find all you need to know about crypto
            world!
          </div>
          <div className="project-news-header-small-social">
            <div className="project-news-header-small-social-item">
              <a
                href="#"
                className="project-news-header-small-social-item-link"
              >
                <img src={InstagramImg} alt="instagram" />
              </a>
            </div>
            <div className="project-news-header-small-social-item">
              <a
                href="#"
                className="project-news-header-small-social-item-link"
              >
                <img src={TwitterImg} alt="twitter" />
              </a>
            </div>
            <div className="project-news-header-small-social-item">
              <a
                href="#"
                className="project-news-header-small-social-item-link"
              >
                <img src={FacebookImg} alt="facebook" />
              </a>
            </div>
            <div className="project-news-header-small-social-item">
              <a
                href="#"
                className="project-news-header-small-social-item-link"
              >
                <img src={LinkedinImg} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-news-blog">
        <div className="project-news-blog-title">Recent Blog Posts</div>
        <div className="project-news-blog-view">
          <a href="#" className="project-news-blog-view-item">
            <img src={ProjectBlogImg} alt="blog" />
          </a>
          <a href="#" className="project-news-blog-view-item">
            <img src={ProjectBlogImg} alt="blog" />
          </a>
          <a href="#" className="project-news-blog-view-item">
            <img src={ProjectBlogImg} alt="blog" />
          </a>
        </div>
        <div className="project-news-blog-description">
          The information available on our website, as well as on linked
          websites, applications, forums, blogs, social media accounts, and
          other DEXTools platforms, is intended for general informational
          purposes only. We do not make any guarantees about the accuracy,
          completeness, or timeliness of the content.This information should not
          be treated as financial, legal, or professional advice for making
          specific decisions. Any actions you take based on this content are
          entirely at your own risk. You are strongly encouraged to perform your
          own due diligence, research, and verification before relying on the
          information provided. Trading involves significant risks and potential
          losses, and it is advisable to consult with a qualified financial
          advisor before proceeding. Nothing on our platform should be viewed as
          an offer or recommendation to take specific actions.
        </div>
      </div>
    </div>
  );
};

export default ProjectNews;
