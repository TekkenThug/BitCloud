import React from "react";

import "./UiTab.scss";

const UiTab: React.FC<{
	text: string,
	isActive: boolean,
	changeHandler: (value: string) => void,
	className?: string
	theme?: "dark" | "light",
}> = (
	{
		text,
		isActive = false,
		changeHandler,
		className = "",
		theme = "dark"
	}) => {
	return (
		<button
			className={`${className} UiTab ${isActive ? "UiTab_active" : ""} UiTab_theme_${theme}`}
			onClick={() => changeHandler(text)}
		>
			{ text }
		</button>
	);
};

export default UiTab;
