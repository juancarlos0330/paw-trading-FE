import React from "react";

// import components
import AboutUsBlog from "../components/aboutus/AboutUsBlog";
import AboutOffer from "../components/aboutus/AboutOffer";
import SocialContact from "../components/aboutus/SocialContact";
import ContactUs from "../components/aboutus/ContactUs";

// import style
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <div className="title">About PAW Chain</div>
      <div className="subtitle">
        "Empowering Traders Worldwide to Make Confident Decisions"
      </div>
      <div className="aboutus-intro">
        <div className="aboutus-intro-item">
          <p className="aboutus-intro-item-title">$1B+</p>
          <p className="aboutus-intro-item-text">Total $PAW Trading Volumn</p>
        </div>{" "}
        <div className="aboutus-intro-item">
          <p className="aboutus-intro-item-title">10K+</p>
          <p className="aboutus-intro-item-text">$PAW Holders</p>
        </div>
      </div>
      <AboutUsBlog />
      <AboutOffer />
      <SocialContact />
      <ContactUs />
    </div>
  );
};

export default AboutUs;
