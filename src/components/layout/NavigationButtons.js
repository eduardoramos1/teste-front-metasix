import React, { useState } from "react";

const NavigationButtons = () => {
	const [homeActive, setHomeActive] = useState(false);
	const [FAQActive, setFAQActive] = useState(true);
	const [localActive, setLocalActive] = useState(false);
	const [categoryActive, setCategoryActive] = useState(false);

	const clearActive = () => {
		setHomeActive(false);
		setFAQActive(false);
		setLocalActive(false);
		setCategoryActive(false);
	};

	return (
		<div className="custom-button-group">
			<a
				href="#!"
				className={homeActive ? "active custom-btn" : "custom-btn shadow"}
				onClick={() => {
					clearActive();
					setHomeActive(true);
				}}
			>
				HOME
			</a>
			<a
				href="#!"
				className={FAQActive ? "active custom-btn" : "custom-btn shadow"}
				onClick={() => {
					clearActive();
					setFAQActive(true);
				}}
			>
				FAQ
			</a>
			<a
				href="#!"
				className={localActive ? "active custom-btn" : "custom-btn shadow"}
				onClick={() => {
					clearActive();
					setLocalActive(true);
				}}
			>
				LOCAIS
			</a>
			<a
				href="#!"
				className={categoryActive ? "active custom-btn" : "custom-btn shadow"}
				onClick={() => {
					clearActive();
					setCategoryActive(true);
				}}
			>
				CATEGORIAS
			</a>
		</div>
	);
};

export default NavigationButtons;
