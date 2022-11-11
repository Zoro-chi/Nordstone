import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Splash from "./Pages/splashPage/Splash";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route to="/" element={<Splash />} />
      </Routes>
    </Router>
  );
};

export default App;
