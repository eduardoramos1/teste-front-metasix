import React from "react";

const QuestionsHeader = () => {
	return (
		<React.Fragment>
			<div className="row mt-2 custom-bg-blue table-header valign-wrapper">
				<div className="col s7 ">Pergunta</div>
				<div className="col s2 right-align">
					<i className="fas fa-plus-circle"></i> Nova Pergunta
				</div>
				<div className="col s1 border-left valign-wrapper table-head-data">
					Ordem
				</div>
				<div className="col s1 border-left valign-wrapper table-head-data">
					Editar
				</div>
				<div className="col s1 border-left valign-wrapper table-head-data">
					Excluir
				</div>
			</div>
		</React.Fragment>
	);
};

export default QuestionsHeader;
