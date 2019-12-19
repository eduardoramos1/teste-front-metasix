import React, { useReducer } from "react";
import FAQContext from "./FAQContext";
import FAQReducer from "./FAQReducer";

import {
	GET_QUESTIONS,
	ADD_QUESTION,
	FILTER_QUESTIONS,
	CLEAR_FILTER
} from "./../Types";

const FAQState = props => {
	const initialState = {
		questions: [],
		currentQuestion: null,
		filtered: null,
		error: null
	};

	const [state, dispatch] = useReducer(FAQReducer, initialState);

	// buscar perguntas
	const getQuestions = async () => {
		try {
			const res = await fetch(
				"https://poc.metasix.solutions/parse/classes/FAQ",
				{
					headers: {
						"X-Parse-Application-Id": "br.com.metasix.poc"
					}
				}
			);

			const data = await res.json();

			dispatch({
				type: GET_QUESTIONS,
				payload: data
			});
		} catch (err) {
			console.error(err);
		}
	};

	// add pergunta
	const addQuestion = question => {
		dispatch({
			type: ADD_QUESTION,
			payload: question
		});
	};

	// atualizar pergunta

	// remover pergunta

	// filtrar perguntas
	const filterQuestions = text => {
		dispatch({ type: FILTER_QUESTIONS, payload: text });
	};

	// limpar filtros
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<FAQContext.Provider
			value={{
				questions: state.questions,
				currentQuestion: state.currentQuestion,
				filtered: state.filtered,
				error: state.error,
				getQuestions,
				addQuestion,
				filterQuestions,
				clearFilter
			}}
		>
			{props.children}
		</FAQContext.Provider>
	);
};

export default FAQState;
