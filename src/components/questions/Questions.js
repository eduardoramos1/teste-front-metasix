import React, { useEffect, useContext } from "react";
import QuestionContext from "./../../context/FAQ/FAQContext";

const Questions = () => {
	const questionContext = useContext(QuestionContext);

	const { getQuestions, questions } = questionContext;

	useEffect(() => {
		getQuestions();
		// eslint-disable-next-line
	}, []);

	console.log(questions);

	return <div></div>;
};

export default Questions;
