import React, { useRef, useContext } from "react";
import FAQContext from "./../../context/FAQ/FAQContext";

const SearchBar = () => {
	const faqContext = useContext(FAQContext);

	const { filterQuestions, clearFilter } = faqContext;

	const text = useRef("");

	const onChange = ev => {
		ev.preventDefault();
		if (text.current.value !== "") {
			filterQuestions(text.current.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				type="text"
				className="browser-default custom-input"
				name="text"
				ref={text}
				placeholder="Busque por termo..."
			/>
			<button className=" btn-search custom-bg-blue" onClick={onChange}>
				<i className="fas fa-search"></i>{" "}
				<span className="btn-text">Buscar</span>
			</button>
		</form>
	);
};

export default SearchBar;
