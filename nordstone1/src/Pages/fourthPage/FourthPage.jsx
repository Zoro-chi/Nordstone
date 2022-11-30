import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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

	useEffect(() => {
		console.log(num1);
		console.log(num2);
	}, [num1, num2]);

	return (
		<div className="containerCalc">
			<Nav user={user} setUser={setUser} />
			{/* // ! FOR INPUT CALCULATION */}
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
			{/* // ! FOR SLIDER CALCULATION */}
			<div className="slider">
				<Slider
					step={1}
					min={0}
					max={1000}
					dots={false}
					onChange={(value) => setNum1(value)}
				/>
				<span>First number: {num1}</span>

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

				<Slider
					step={1}
					min={0}
					max={1000}
					dots={false}
					onChange={(value) => setNum2(value)}
				/>
				<span>Second number: {num2}</span>
				<button onClick={handleClick} className="calcBtn" type="submit">
					Calculate
				</button>
			</div>
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
