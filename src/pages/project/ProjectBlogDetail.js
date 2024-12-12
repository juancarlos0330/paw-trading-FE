import React from "react";

// import components
import BlogDetail from "../../components/project/BlogDetail";
import FeaturedBlogs from "../../components/project/FeaturedBlogs";
import RecentPosts from "../../components/project/RecentPosts";

// import style
import "./ProjectBlogDetail.scss";

const ProjectBlogDetail = () => {
  return (
    <div className="project-blog-detail-page">
      <div className="title">Project Blogs</div>
      <BlogDetail />
      <FeaturedBlogs />
      <RecentPosts title="Recent Posts" />
    </div>
  );
};

export default ProjectBlogDetail;
