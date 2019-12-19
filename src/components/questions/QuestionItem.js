import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const QuestionItem = ({ q, i }) => {
	useEffect(() => {
		var elems = document.querySelectorAll(".collapsible");

		M.Collapsible.init(elems);
	}, []);

	return (
		<ul className="collapsible expandable mobile-font">
			<li>
				<div className="collapsible-header row">
					<span className="col s6 m9">{q.question}</span>
					<span className="col s2 m3 center-align hide-on-small-only">
						{i + 1}{" "}
					</span>
					<span className="col s2 center-align">
						<a href="#!">
							<i className="fas fa-edit custom-blue"></i>
						</a>
					</span>
					<span className="col s2 center-align justify-center">
						<i class="fas fa-trash-alt custom-red"></i>
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
