import React from "react";

// import components
import FeaturedBlogs from "../../components/project/FeaturedBlogs";
import RecentPosts from "../../components/project/RecentPosts";

// import style
import "./ProjectBlog.scss";

const ProjectBlog = () => {
  return (
    <div className="project-blog-page">
      <div className="title">Project Blogs</div>
      <FeaturedBlogs title="Featured Blog Posts" />
      <RecentPosts title="Recent Posts" />
    </div>
  );
};

export default ProjectBlog;
