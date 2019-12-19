import React from "react";

const QuestionsHeader = () => {
	return (
		<React.Fragment>
			<div className="row mt-2 custom-bg-blue table-header valign-wrapper ">
				<div className="col s2 m7 ">Pergunta</div>
				<a href="#addQuestion" className="col s4 m2 right-align modal-trigger">
					<i className="fas fa-plus-circle"></i> Nova Pergunta
				</a>
				<div className="col s2 border-left valign-wrapper justify-center hide-on-small-only">
					Ordem
				</div>
				<div className="col s2 border-left valign-wrapper justify-center">
					Editar
				</div>
				<div className="col s2 border-left valign-wrapper justify-center">
					Excluir
				</div>
			</div>
		</React.Fragment>
	);
};

export default QuestionsHeader;
