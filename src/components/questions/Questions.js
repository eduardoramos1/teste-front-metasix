import React, { useEffect, useContext } from "react";
import QuestionContext from "./../../context/FAQ/FAQContext";

const Questions = () => {
	const questionContext = useContext(QuestionContext);

	const { getQuestions } = questionContext;

	useEffect(() => {
		getQuestions();
		// eslint-disable-next-line
	}, []);

	return <div></div>;
};

export default Questions;
