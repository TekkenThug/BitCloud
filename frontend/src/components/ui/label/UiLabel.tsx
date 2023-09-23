import React from "react";

import "./UiLabel.scss";

export interface UiLabelProps {
	title: string,
	color: "black" | "green" | "red" | "blue" | "purple",
}

const UiLabel: React.FC<UiLabelProps> = ({ title, color }) => {
	return (
		<div className={`UiLabel UiLabel_${color}`}>
			{ title }
		</div>
	);
};

export default UiLabel;
