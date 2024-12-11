import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import ChainOverview from "./pages/overview/ChainOverview";
import Login from "./pages/auth/Login";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/overview/chain" exact element={<ChainOverview />} />
        <Route path="/*" exact element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
