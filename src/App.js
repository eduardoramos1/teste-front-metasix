import React, { useEffect } from "react";

import Header from "./components/layout/Header";
import Questions from "./components/questions/Questions";
import NavigationButtons from "./components/layout/NavigationButtons";
import FAQTitle from "./components/layout/FAQTitle";
import SearchBar from "./components/questions/SearchBar";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import FAQState from "./context/FAQ/FAQState";

function App() {
	useEffect(() => {
		// Inicia o Materialize, permitindo usar componentes javascript
		M.AutoInit();
	}, []);

	return (
		<FAQState>
			<div className="App">
				<Header />
				<div className="custom-container">
					<NavigationButtons />
					<div className="flex-between mt-2 title-and-search-bar">
						<div className="">
							<FAQTitle />
						</div>
						<div>
							<SearchBar />
						</div>
					</div>
					<Questions />
				</div>
			</div>
		</FAQState>
	);
}

export default App;
