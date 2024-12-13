import React from "react";

// import components
import AdminProfile from "../../components/adminblog/AdminProfile";
import AdminManagePost from "../../components/adminblog/AdminManagePost";
import AdminPosts from "../../components/adminblog/AdminPosts";
import AdminEditPost from "../../components/adminblog/AdminEditPost";
import AdminIntegration from "../../components/adminblog/AdminIntegration";

// import style
import "./AdminBlog.scss";

const AdminBlog = () => {
  return (
    <div className="admin-blog-page">
      <AdminProfile />
      <AdminManagePost />
      <AdminPosts />
      <AdminEditPost />
      <AdminIntegration />
    </div>
  );
};

export default AdminBlog;
