import React, { useContext, useState, useEffect } from "react";
import FAQContext from "./../../../context/FAQ/FAQContext";

import M from "materialize-css/dist/js/materialize.min.js";

const UpdateQuestionModal = () => {
	const faqContext = useContext(FAQContext);

	const { currentQuestion, updateQuestion } = faqContext;

	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");
	const [objectId, setObjectId] = useState("");

	useEffect(() => {
		if (currentQuestion) {
			setQuestion(currentQuestion.question);
			setAnswer(currentQuestion.answer);
			setObjectId(currentQuestion.objectId);
		}
	}, [currentQuestion]);

	const onSubmit = () => {
		if (answer === "" || question === "") {
			M.toast({
				html: "Por favor digite algo em ambos os campos",
				classes: "custom-bg-red"
			});
		} else {
			updateQuestion({ question, answer, objectId });
		}
	};

	return (
		<div id="updateQuestion" className="modal">
			<div className="modal-content">
				<h4>Atualizar Pergunta</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="question"
							id="question"
							value={question}
							onChange={ev => setQuestion(ev.target.value)}
						/>
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

export default UpdateQuestionModal;
