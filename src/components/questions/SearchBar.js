import React from "react";

const SearchBar = () => {
	return (
		<form>
			<input
				type="text"
				className="browser-default custom-input"
				name="text"
				placeholder="Busque por termo..."
			/>
			<button className=" btn-search custom-bg-blue">
				<i className="fas fa-search"></i>{" "}
				<span className="btn-text">Buscar</span>
			</button>
		</form>
	);
};

export default SearchBar;
