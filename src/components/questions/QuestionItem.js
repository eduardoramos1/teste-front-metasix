import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const QuestionItem = ({ q }) => {
	useEffect(() => {
		var elems = document.querySelectorAll(".collapsible");
		M.Collapsible.init(elems);
	}, []);

	return (
		<ul className="collapsible expandable">
			<li>
				<div className="collapsible-header">{q.question}</div>
				<div className="collapsible-body">
					<span>{q.answer}</span>
				</div>
			</li>
		</ul>
	);
};

export default QuestionItem;
