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
		<div className="custom-button-group mt-3">
			<a
				href="#!"
				className={
					homeActive ? "custom-bg-blue custom-btn" : "custom-btn shadow"
				}
				onClick={() => {
					clearActive();
					setHomeActive(true);
				}}
			>
				HOME
			</a>
			<a
				href="#!"
				className={
					FAQActive ? "custom-bg-blue custom-btn" : "custom-btn shadow"
				}
				onClick={() => {
					clearActive();
					setFAQActive(true);
				}}
			>
				FAQ
			</a>
			<a
				href="#!"
				className={
					localActive ? "custom-bg-blue custom-btn" : "custom-btn shadow"
				}
				onClick={() => {
					clearActive();
					setLocalActive(true);
				}}
			>
				LOCAIS
			</a>
			<a
				href="#!"
				className={
					categoryActive ? "custom-bg-blue custom-btn" : "custom-btn shadow"
				}
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
