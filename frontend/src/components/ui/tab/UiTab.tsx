import React from "react";

import "./UiTab.scss";

const UiTab: React.FC<{
	text: string,
	isActive: boolean,
	changeHandler: (value: string) => void,
	className?: string
}> = (
	{
		text,
		isActive = false,
		changeHandler,
		className = ""
	}) => {
	return (
		<button
			className={`${className} UiTab ${isActive ? "UiTab_active" : ""}`}
			onClick={() => changeHandler(text)}
		>
			{ text }
		</button>
	);
};

export default UiTab;
