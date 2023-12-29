import React, { useState } from "react";

import "./UiInputConfirm.scss";

import ArrowRight from "@/assets/icons/ui/arrow-right.svg?react";
import Loading from "@/assets/icons/controls/loading.svg?react";
import Check from "@/assets/icons/ui/check.svg?react";

interface UiInputProps {
	type?: string;
	placeholder?: string;
	submitHandle: (value: string) => void;
	isLoading?: boolean;
	isSuccess?: boolean;
}

// TODO: make validation and incorrect state
const UiInputConfirm: React.FC<UiInputProps> = (
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
            className={`UiInputConfirm ${isLoading ? "UiInputConfirm_loading" : ""} ${isSuccess ? "UiInputConfirm_success" : ""}`}
        >
            <input
                className="UiInputConfirm__nativeInput"
                type={type}
                value={value}
                placeholder={placeholder}
                onInput={handleInputValue}
            />

            <button
                disabled={!value}
                className="UiInputConfirm__extra-button"
                onClick={() => submitHandle(value)}
            >
                {
                    isLoading ? <Loading className="UiInputConfirm__icon spin-animation" /> :
                        isSuccess ? <Check className="UiInputConfirm__icon"  /> : <ArrowRight className="UiInputConfirm__icon" />
                }
            </button>
        </div>
    );
};

export default UiInputConfirm;
