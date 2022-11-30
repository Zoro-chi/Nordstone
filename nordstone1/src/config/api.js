import axios from "axios";

const getBaseUrl = () => {
	let url;
	switch (process.env.NODE_ENV) {
		case "production":
			url = process.env.REACT_APP_API_URL_PROD;
			break;

		case "development":
			url = process.env.REACT_APP_API_URL;
	}
	return url;
};

const API = axios.create({
	baseURL: getBaseUrl(),
});

export const calculation = (num1, num2, operator) =>
	API.post("/api/calc", {
		num1,
		operator,
		num2,
	});
