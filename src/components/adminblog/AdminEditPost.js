import React from "react";

// import style
import "./AdminEditPost.scss";

const AdminEditPost = () => {
  return (
    <div className="admin-edit-post-container">
      <div className="admin-edit-post-title">Edit Project Info</div>
      <div className="admin-edit-post-view">
        <div className="admin-edit-post-item">
          <label className="admin-edit-post-item-title">Project Name</label>
          <input type="text" placeholder="My Project" />
        </div>
        <div className="admin-edit-post-item">
          <label className="admin-edit-post-item-title">
            Project Description
          </label>
          <textarea placeholder="Enter your description" rows={5}></textarea>
        </div>
        <div className="admin-edit-post-item">
          <label className="admin-edit-post-item-title">Home Page</label>
          <input type="text" placeholder="Home Page" />
        </div>
        <div className="admin-edit-post-item">
          <label className="admin-edit-post-item-title">Twitter</label>
          <input type="text" placeholder="Twitter" />
        </div>
        <div className="admin-edit-post-item">
          <label className="admin-edit-post-item-title">Linkedin</label>
          <input type="text" placeholder="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default AdminEditPost;
