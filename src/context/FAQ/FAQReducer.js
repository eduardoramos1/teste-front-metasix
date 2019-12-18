import { GET_QUESTIONS } from "./../Types";

export default (state, action) => {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				questions: action.payload
			};
		default:
			return state;
	}
};
