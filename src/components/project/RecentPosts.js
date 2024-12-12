import React from "react";

// import components
import ProjectPosts from "./ProjectPosts";

// import style
import "./RecentPosts.scss";

const RecentPosts = ({ title }) => {
  return (
    <div className="recent-blogs-container">
      {title && <div className="recent-blogs-title">{title}</div>}
      <ProjectPosts title="News" />
      <ProjectPosts title="Updated" />
    </div>
  );
};

export default RecentPosts;
