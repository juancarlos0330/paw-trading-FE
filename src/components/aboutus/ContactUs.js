import React from "react";

// import style
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-title">Contact Form/Partnership inquiries</div>
      <div className="contactus-view">
        <div className="contactus-item">
          <label className="contactus-item-title">Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="contactus-item">
          <label className="contactus-item-title">Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="contactus-item">
          <label className="contactus-item-title">Subject</label>
          <input type="text" placeholder="Enter your subject" />
        </div>
        <div className="contactus-item">
          <label className="contactus-item-title">Description</label>
          <textarea placeholder="Enter your description" rows={5}></textarea>
        </div>
        <div className="contactus-item-submit">
          <button type="button" className="contactus-item-submit-btn">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
