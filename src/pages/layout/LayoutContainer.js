import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// import components
import Navbar from "../../components/layout/Navbar";
import NewTokens from "../../components/layout/NewTokens";
import Header from "../../components/layout/Header";

// import style
import "./LayoutContainer.scss";

const LayoutContainer = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="layout-container">
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="main-container">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <NewTokens />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutContainer;
