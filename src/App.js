import React, { useEffect } from "react";

import NavBar from "./components/layout/Navbar";
import Questions from "./components/questions/Questions";

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
				<NavBar />
				<div className="container">
					<Questions />
				</div>
			</div>
		</FAQState>
	);
}

export default App;
