import { useNavigate } from "react-router-dom";

import "./secondPage.scss";
import Nav from "../../components/nav/Nav";

const SecondPage = ({ user, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Nav user={user} setUser={setUser} />
      <span onClick={() => navigate("/thirdPage")}> Next Page </span>
      <span onClick={() => navigate("/firstPage")}> Prev Page </span>
    </div>
  );
};

export default SecondPage;
