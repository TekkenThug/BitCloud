import React, { useState } from "react";

import { ReactComponent as ArrowRight } from "assets/icons/ui/arrow-right.svg";
import { ReactComponent as Loading } from "assets/icons/controls/loading.svg";
import { ReactComponent as Check } from "assets/icons/ui/check.svg";

import "./UiInput.scss";

interface UiInputProps {
	type?: string;
	placeholder?: string;
	submitHandle: (value: string) => void;
	isLoading?: boolean;
	isSuccess?: boolean;
}

// TODO: make validation and incorrect state
const UiInput: React.FC<UiInputProps> = (
	{
		type = "text",
		placeholder = "",
		isLoading = false,
		isSuccess = false,
		submitHandle
	}
) => {
	const [value, setValue] = useState("");

	const handleInputValue = (event: React.FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	return (
		<div
			className={`UiInput ${isLoading ? "UiInput_loading" : ""} ${isSuccess ? "UiInput_success" : ""}`}
		>
			<input
				className="UiInput__nativeInput"
				type={type}
				value={value}
				placeholder={placeholder}
				onInput={handleInputValue}
			/>

			<button
				disabled={!value}
				className="UiInput__extra-button"
				onClick={() => submitHandle(value)}
			>
				{
					isLoading ? <Loading className="UiInput__icon spin-animation" /> :
						isSuccess ? <Check className="UiInput__icon"  /> : <ArrowRight className="UiInput__icon" />
				}
			</button>
		</div>
	);
};

export default UiInput;
