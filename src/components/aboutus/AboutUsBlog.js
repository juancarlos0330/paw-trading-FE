import React from "react";

// import assets
import BlogImg from "../../assets/image/project/blog.jpg";

// import style
import "./AboutUsBlog.scss";

const AboutUsBlog = () => {
  return (
    <div className="aboutus-blog-container">
      <div className="aboutus-blog-item">
        <div className="aboutus-blog-item-content">
          <div className="aboutus-blog-item-section">
            <div className="aboutus-blog-item-content-title">Who We Are?</div>
            <div className="aboutus-blog-item-content-text">
              PAW Chain Analytics is your comprehensive platform for tracking,
              analyzing, and exploring blockchain projects on the PAW Chain. By
              combining the best features of tools like DEX Tools, DeFiLlama,
              and CoinMarket Cap, we provide a one-stop solution for developers,
              project owners, and blockchain enthusiasts to access real-time
              data and actionable insights.PAW Chain Analytics is your
              comprehensive platform for tracking, analyzing, and exploring
              blockchain projects on the PAW Chain. By combining the best
              features of tools like DEX Tools, DeFiLlama, and CoinMarket Cap,
              we provide a one-stop solution for developers, project owners, and
              blockchain enthusiasts to access real-time data and actionable
              insights.
            </div>
          </div>
        </div>
        <div className="aboutus-blog-item-img">
          <img src={BlogImg} alt="blog" />
        </div>
      </div>
      <div className="aboutus-blog-item">
        <div className="aboutus-blog-item-img">
          <img src={BlogImg} alt="blog" />
        </div>
        <div className="aboutus-blog-item-content">
          <div className="aboutus-blog-item-section">
            <div className="aboutus-blog-item-content-title">Our Mission</div>
            <div className="aboutus-blog-item-content-text">
              PAW Chain Analytics is your comprehensive platform for tracking,
              analyzing, and exploring blockchain projects on the PAW Chain. By
              combining the best features of tools like DEX Tools, DeFiLlama,
              and CoinMarket Cap, we provide a one-stop solution for developers,
              project owners, and blockchain enthusiasts to access real-time
              data and actionable insights.PAW Chain Analytics is your
              comprehensive platform for tracking, analyzing, and exploring
              blockchain projects on the PAW Chain.
            </div>
          </div>
          <div className="aboutus-blog-item-section">
            <div className="aboutus-blog-item-content-title">Our Vision</div>
            <div className="aboutus-blog-item-content-text">
              PAW Chain Analytics is your comprehensive platform for tracking,
              analyzing, and exploring blockchain projects on the PAW Chain. By
              combining the best features of tools like DEX Tools, DeFiLlama,
              and CoinMarket Cap, we provide a one-stop solution for developers,
              project owners, and blockchain enthusiasts to access real-time
              data and actionable insights.PAW Chain Analytics is your
              comprehensive platform for tracking, analyzing, and exploring
              blockchain projects on the PAW Chain.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlog;
