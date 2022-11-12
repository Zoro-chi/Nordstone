import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "./auth.scss";
import { app } from "../../config/firebaseConfig";

const Auth = ({ setUser }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(createUser.user);
      setUser(createUser.user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="auth">
      <div className="authContainer">
        <div className="authLogo">
          <span className="authLogoSpan"> Register </span>
        </div>
        <div className="authFormWrap">
          <div className="authForm">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              pattern=".{8,}"
              title="Must contain at least 6 characters"
              required
            />
            <button className="signIn-btn" onClick={handleSubmit}>
              Register
            </button>
            <Link to="/auth/signIn" style={{ textDecoration: "none" }}>
              <span style={{ color: "black" }}>
                Already have an account? Sign in here!
              </span>
            </Link>
          </div>
          {error && <span className="error"> {error} </span>}
        </div>
      </div>
    </div>
  );
};

export default Auth;
