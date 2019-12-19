import React, { useState, useContext } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import QuestionContext from "./../../../context/FAQ/FAQContext";

const AddQuestionModal = () => {
	const questionContext = useContext(QuestionContext);
	const { addQuestion, questions } = questionContext;

	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	const onSubmit = () => {
		if (question.length && answer.length) {
			const questionObj = {
				question,
				answer,
				objectId: (questions.length + 1).toString()
			};

			addQuestion(questionObj);

			setQuestion("");
			setAnswer("");
		} else {
			M.toast({
				html: "Por Favor digite a pergunta e a resposta",
				classes: "custom-bg-red"
			});
		}
	};

	return (
		<div id="addQuestion" className="modal">
			<div className="modal-content">
				<h4>Adicionar nova Pergunta</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="question"
							id="question"
							value={question}
							onChange={ev => setQuestion(ev.target.value)}
						/>
						<label htmlFor="question" className="active">
							Pergunta
						</label>
					</div>
				</div>
				<div className="row">
					<div className="row">
						<div className="input-field">
							<textarea
								id="answer"
								name="answer"
								value={answer}
								onChange={ev => setAnswer(ev.target.value)}
								className="materialize-textarea"
							></textarea>
							<label htmlFor="textarea1">Resposta</label>
						</div>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					className="modal-close custom-bg-blue waves-effect waves-light btn"
					onClick={onSubmit}
				>
					Confirmar
				</a>
			</div>
		</div>
	);
};

export default AddQuestionModal;
