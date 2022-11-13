import { useNavigate } from "react-router-dom";

import "./nav.scss";

const Nav = ({ user, setUser }) => {
  console.log(user);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    setUser("");
    navigate("/");
  };

  return (
    <div className="nav">
      <div className="container">
        <span className="username"> {user ? user.email : ""} </span>
        <button onClick={handleClick} className="logoutBtn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
