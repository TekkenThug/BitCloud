import React from "react";

import styles from "./MarketWidgetNavButton.module.scss";

const MarketWidgetNavButton: React.FC<{
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
			className={`${className} ${styles.MarketWidgetNavButton} ${isActive ? styles.MarketWidgetNavButton_active : ""}`}
			onClick={() => changeHandler(text)}
		>
			{ text }
		</button>
	);
};

export default MarketWidgetNavButton;
