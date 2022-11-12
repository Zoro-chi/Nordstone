import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.scss";
import Splash from "./Pages/splashPage/Splash";
import Auth from "./Pages/auth/Auth";
import SignIn from "./Pages/auth/SignIn";

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/auth/signIn" element={<SignIn setUser={setUser} />} />
        <Route path="/auth/register" element={<Auth setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
