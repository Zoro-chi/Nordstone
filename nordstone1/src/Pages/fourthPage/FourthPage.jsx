import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slider } from 'primereact/slider';

import "./fourthPage.scss";
import Nav from "../../components/nav/Nav";
import { calculation } from "../../config/api";

const FourthPage = ({ user, setUser }) => {
  const [answer, setAnswer] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const calculate = await calculation(num1, num2, operator);
      setAnswer(calculate.data.answer);
    } catch (error) {
      setAnswer("Please fill all fields");
      console.log(error.message);
    }
  };

  return (
    <div className="containerCalc">
      <Nav user={user} setUser={setUser} />
      {/* <div className="calculation">
        <form className="inputs">
          <input
            placeholder="Enter a number"
            type="number"
            name="num1"
            onChange={(e) => setNum1(e.target.value)}
            required
          />
          <select
            placeholder="Select an operator"
            name="operator"
            onChange={(e) => setOperator(e.target.value)}
            required
          >
            <option value=""> </option>
            <option value="+"> + </option>
            <option value="-"> - </option>
            <option value="*"> * </option>
          </select>
          <input
            placeholder="Enter a number"
            type="number"
            name="num2"
            onChange={(e) => setNum2(e.target.value)}
            required
          />
          <button onClick={handleClick} className="calcBtn" type="submit">
            Calculate
          </button>
        </form>
      </div> */}

      {/* <div className="slider"> */}
        
          <Slider value={num1} onChange={(e) => setNum1(e.value)} min={0} max={100} range={100}/>
          <select
            placeholder="Select an operator"
            name="operator"
            onChange={(e) => setOperator(e.target.value)}
            required
          >
            <option value=""> </option>
            <option value="+"> + </option>
            <option value="-"> - </option>
            <option value="*"> * </option>
          </select>
          <Slider value={num2} onChange={(e) => setNum2(e.value)} min={0} max={100}/>
          <button onClick={handleClick} className="calcBtn" type="submit">
            Calculate
          </button>
      {/* </div> */}

      {answer && (
        <span className="answer">
          Your answer is: <p> {answer} </p>
        </span>
      )}

      <span className="page" onClick={() => navigate("/thirdPage")}>
        Prev Page
      </span>
    </div>
  );
};

export default FourthPage;
