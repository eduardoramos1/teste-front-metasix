import {
	GET_QUESTIONS,
	ADD_QUESTION,
	FILTER_QUESTIONS,
	CLEAR_FILTER,
	DELETE_QUESTION,
	UPDATE_QUESTION,
	SET_CURRENT
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

		case DELETE_QUESTION:
			return {
				...state,
				questions: state.questions.filter(q => q.objectId !== action.payload),
				filtered:
					state.filtered !== null
						? state.filtered.filter(q => q.objectId !== action.payload)
						: null
			};
		case SET_CURRENT:
			return {
				...state,
				currentQuestion: action.payload
			};

		case UPDATE_QUESTION:
			return {
				...state,
				questions: state.questions.map(q =>
					q.objectId === action.payload.objectId ? action.payload : q
				),
				filtered:
					state.filtered !== null
						? state.filtered.map(q =>
								q.objectId === action.payload.objectId ? action.payload : q
						  )
						: null,
				currentQuestion: {}
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
