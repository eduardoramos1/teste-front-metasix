import {
	GET_QUESTIONS,
	ADD_QUESTION,
	FILTER_QUESTIONS,
	CLEAR_FILTER
} from "./../Types";

export default (state, action) => {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				questions: action.payload.results
			};
		case ADD_QUESTION:
			return {
				...state,
				questions: [...state.questions, action.payload]
			};
		case FILTER_QUESTIONS:
			return {
				...state,
				filtered: state.questions.filter(q => {
					const regex = new RegExp(`${action.payload}`, "gi");
					return q.question.match(regex) || q.answer.match(regex);
				})
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null
			};
		default:
			return state;
	}
};
