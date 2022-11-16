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
import FirstPage from "./Pages/firstPage/FirstPage";
import SecondPage from "./Pages/secondPage/SecondPage";
import ThirdPage from "./Pages/thirdPage/ThirdPage";
import FourthPage from "./Pages/fourthPage/FourthPage";

const App = () => {
  const INITIAL = JSON.parse(localStorage.getItem("user")) || "";
  const [user, setUser] = useState(INITIAL);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/firstPage" /> : <Splash />}
        />
        <Route path="/auth/signIn" element={<SignIn setUser={setUser} />} />
        <Route path="/auth/register" element={<Auth setUser={setUser} />} />
        <Route
          path="/firstPage"
          element={
            !user ? (
              <Navigate to="/auth/signIn" />
            ) : (
              <FirstPage user={user} setUser={setUser} />
            )
          }
        />
        <Route
          path="/secondPage"
          element={
            !user ? (
              <Navigate to="/auth/signIn" />
            ) : (
              <SecondPage user={user} setUser={setUser} />
            )
          }
        />
        <Route
          path="/thirdPage"
          element={
            !user ? (
              <Navigate to="/auth/signIn" />
            ) : (
              <ThirdPage user={user} setUser={setUser} />
            )
          }
        />
        <Route
          path="/fourthPage"
          element={
            !user ? (
              <Navigate to="/auth/signIn" />
            ) : (
              <FourthPage user={user} setUser={setUser} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
