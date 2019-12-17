import React, { useReducer } from "react";
import FAQContext from "./FAQContext";
import FAQReducer from "./FAQReducer";

const FAQState = props => {
	const initialState = {
		questions: [],
		currentQuestion: null,
		filtered: null,
		error: null
	};

	const [state, dispatch] = useReducer(FAQReducer, initialState);

	// buscar perguntas

	// atualizar pergunta

	// remover pergunta

	return (
		<FAQContext.Provider
			value={{
				questions: state.questions,
				currentQuestion: state.currentQuestion,
				filtered: state.filtered,
				error: state.error
			}}
		>
			{props.children}
		</FAQContext.Provider>
	);
};

export default FAQState;
