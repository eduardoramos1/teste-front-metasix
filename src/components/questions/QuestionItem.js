import React, { useEffect, useContext } from "react";
import FAQContext from "./../../context/FAQ/FAQContext";
import M from "materialize-css/dist/js/materialize.min.js";

const QuestionItem = ({ q, i }) => {
	const faqContext = useContext(FAQContext);

	const { deleteQuestion, setCurrentQuestion } = faqContext;

	useEffect(() => {
		var elems = document.querySelectorAll(".collapsible");

		M.Collapsible.init(elems);
	}, []);

	const onDelete = () => {
		const confirm = window.confirm("Tem certeza que deseja remover? ");

		if (confirm) {
			deleteQuestion(q.objectId);
		}
	};

	return (
		<ul className="collapsible expandable mobile-font">
			<li>
				<div className="collapsible-header row">
					<span className="col s6 m9">{q.question}</span>
					<span className="col s2 m3 center-align hide-on-small-only">
						{i + 1}{" "}
					</span>
					<span
						className="col s2 center-align modal-trigger"
						href="#updateQuestion"
						onClick={() =>
							setCurrentQuestion({
								objectId: q.objectId,
								question: q.question,
								answer: q.answer
							})
						}
					>
						<a href="#!">
							<i className="fas fa-edit custom-blue"></i>
						</a>
					</span>
					<span
						className="col s2 center-align justify-center"
						onClick={onDelete}
					>
						<i className="fas fa-trash-alt custom-red"></i>
					</span>
				</div>
				<div className="collapsible-body">
					<span>{q.answer}</span>
				</div>
			</li>
		</ul>
	);
};

export default QuestionItem;
