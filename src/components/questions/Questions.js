import React, { useEffect, useContext } from "react";
import FAQContext from "./../../context/FAQ/FAQContext";

import QuestionItem from "./QuestionItem";

const Questions = () => {
	const faqContext = useContext(FAQContext);

	const { getQuestions, questions, filtered } = faqContext;

	useEffect(() => {
		getQuestions();
		// eslint-disable-next-line
	}, []);

	if (filtered !== null) {
		if (!filtered.length) {
			return " Não foi encontrado resultados na sua pesquisa";
		}
		return filtered.map((q, i) => (
			<React.Fragment key={q.objectId}>
				<QuestionItem q={q} i={i} />
			</React.Fragment>
		));
	} else if (questions.length) {
		return questions.map((q, i) => (
			<React.Fragment key={q.objectId}>
				<QuestionItem q={q} i={i} />
			</React.Fragment>
		));
	} else {
		return (
			<div className="center-align">
				<div className="preloader-wrapper big active ">
					<div className="spinner-layer spinner-blue-only">
						<div className="circle-clipper left">
							<div className="circle"></div>
						</div>
						<div className="gap-patch">
							<div className="circle"></div>
						</div>
						<div className="circle-clipper right">
							<div className="circle"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Questions;
