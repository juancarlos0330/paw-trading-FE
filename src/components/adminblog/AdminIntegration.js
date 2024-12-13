import React from "react";

// import style
import "./AdminIntegration.scss";

const AdminIntegration = () => {
  return (
    <div className="admin-integration-container">
      <div className="admin-integration-title">Integration Management</div>
      <div className="admin-integration-text">
        To integrate our project with your website or app, follow the
        instructions provided in the documentation. Ensure you have the
        necessary API keys and follow the steps carefully to avoid any issues To
        integrate our project with your website or app, follow the instructions
        provided in the documentation. Ensure you have the necessary API keys
        and follow the steps carefully to avoid any issues..
      </div>
      <div className="admin-integration-section">
        <div className="admin-integration-key-group">
          <div className="admin-integration-key-group-item">
            <div className="admin-integration-key-group-item-title">
              API Key
            </div>
            <div className="admin-integration-key-group-item-value">
              <input type="text" placeholder="Enter your API key" />
            </div>
          </div>
          <div className="admin-integration-key-group-item">
            <div className="admin-integration-key-group-item-title">
              API Secret
            </div>
            <div className="admin-integration-key-group-item-value">
              <input type="text" placeholder="Enter your API key" />
            </div>
          </div>
        </div>
        <div className="admin-integration-generate">
          <div className="admin-integration-generate-title">
            Generate New Key
          </div>
          <div className="admin-integration-generate-btn">
            <button type="button" className="generate">
              Save
            </button>
            <button type="button" className="cancel">
              Cancel
            </button>
          </div>
        </div>
        <div className="admin-integration-help">
          <p className="admin-integration-help-text">
            For any issues or support, please refer to our help and support
            center. You can find FAQs, troubleshooting guides, and contact
            information for further assistance.For any issues or support, please
            refer to our help and support center. You can find FAQs,
          </p>
          <button className="admin-integration-help-btn" type="button">
            Help & Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminIntegration;
