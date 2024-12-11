import React from "react";
import { Outlet } from "react-router-dom";

// import components
import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";

// import style
import "./LayoutContainer.scss";

const LayoutContainer = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="main-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutContainer;
