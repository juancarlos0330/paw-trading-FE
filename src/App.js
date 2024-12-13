import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import LayoutContainer from "./pages/layout/LayoutContainer";
import ChainOverview from "./pages/overview/ChainOverview";
import ProjectOverview from "./pages/overview/ProjectOverview";
import ProjectBlog from "./pages/project/ProjectBlog";
import ProjectBlogDetail from "./pages/project/ProjectBlogDetail";
import AnalyticsDashboard from "./pages/dashboard/AnalyticsDashboard";
import Trending from "./pages/overview/Trending";
import Login from "./pages/auth/Login";
import Notfound from "./pages/Notfound";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route element={<LayoutContainer />}>
          <Route path="/overview/chain" exact element={<ChainOverview />} />
          <Route path="/overview/project" exact element={<ProjectOverview />} />
          <Route
            path="/dashboard/analytics"
            exact
            element={<AnalyticsDashboard />}
          />
          <Route path="/blogs" exact element={<ProjectBlog />} />
          <Route path="/blogs/detail" exact element={<ProjectBlogDetail />} />
          <Route path="/trending" exact element={<Trending />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
        </Route>
        <Route path="/*" exact element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
