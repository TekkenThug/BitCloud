import React from "react";

import "./UiButton.scss";

interface UiButtonProps {
	text: string;
	color: "dark";
	size?: "medium" | "large";
	className?: string;
	clickHandler: () => void; // TODO: replace
	children: React.ReactNode
}

const UiButton: React.FC<UiButtonProps> = (
	{
		color,
		size = "medium",
		className = "",
		children,
		clickHandler
	}
) => {
	return (
		<button
			className={`UiButton UiButton_color_${color} UiButton_size_${size} ${className}`}
			onClick={() => clickHandler()}
		>
			{ children }
		</button>
	);
};

export default UiButton;
