import { Link } from "react-router-dom";

import "./firstPage.scss";
import Nav from "../../components/nav/Nav";

const FirstPage = ({ user, setUser }) => {
  const handleClick = () => {
    alert("I was Clicked");
  };

  return (
    <div className="container">
      <Nav user={user} setUser={setUser} />
      <button onClick={handleClick}>Click Me!</button>
      <Link to="/secondPage" style={{ textDecoration: "none" }}>
        <span> Next Page </span>
      </Link>
    </div>
  );
};

export default FirstPage;
