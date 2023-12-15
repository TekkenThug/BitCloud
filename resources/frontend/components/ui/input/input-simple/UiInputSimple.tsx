import { FC } from "react";

import "./UiInputSimple.scss";

interface UiInputSimpleProps {
	type?: string;
	label?: string;
	placeholder?: string;
	className?: string;
}

const UiInputSimple: FC<UiInputSimpleProps> = (
	{
		type = "text",
		label = "",
		placeholder = "",
		className = "",
	}
) => {
	const inputField = <input className="UiInputSimple__nativeInput" type={type} placeholder={placeholder} />;
	const inputFieldWithLabel = <label className="UiInputSimple__label"><span>{ label }</span>{ inputField }</label>;
	
	return (
		<div className={`${className}`}>
			{
				label ? inputFieldWithLabel : inputField
			}
		</div>
	);
};

export default UiInputSimple;
