import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

import "./auth.scss";
import { app } from "../../config/firebaseConfig";

const SignIn = ({ setUser }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const currentUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //   console.log(currentUser.user);
      setUser(currentUser.user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="auth">
      <div className="authContainer">
        <div className="authLogo">
          <span className="authLogoSpan"> Sign </span> In
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
              required
            />
            <button className="signIn-btn" onClick={handleSubmit}>
              Sign In
            </button>
            <Link style={{ textDecoration: "none" }}>
              <span className="forgotPassword"> Forgot Password? </span>
            </Link>
            <Link to="/auth/register" style={{ textDecoration: "none" }}>
              <span style={{ color: "black" }}>
                Don't have an account? Register here!
              </span>
            </Link>
            {error && <span className="error"> {error} </span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
