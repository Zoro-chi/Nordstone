import { Link } from "react-router-dom";

import "./splash.scss";

const Splash = () => {
  return (
    <div className="splash">
      <div className="splashContainer">
        <h1 className="splashText"> Welcome to Nordstone </h1>
        <Link to="/auth/signIn">
          <button className="signInBtn"> Sign In </button>
        </Link>
      </div>
    </div>
  );
};

export default Splash;
