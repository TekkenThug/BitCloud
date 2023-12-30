import{ useState, FC, FormEvent } from "react";

import "./UiInputConfirm.scss";

import ArrowRight from "@/assets/icons/ui/arrow-right.svg?react";
import Loading from "@/assets/icons/controls/loading.svg?react";
import Check from "@/assets/icons/ui/check.svg?react";

interface UiInputProps {
	type?: string;
	placeholder?: string;
	submitHandle: (value: string) => void;
    inputHandle?: () => void;
	isLoading?: boolean;
	isSuccess?: boolean;
    isError?: boolean;
    errorText?: string;
}

// TODO: make validation and incorrect state
const UiInputConfirm: FC<UiInputProps> = (
    {
        type = "text",
        placeholder = "",
        isLoading = false,
        isSuccess = false,
        isError = false,
        errorText = "",
        submitHandle,
        inputHandle = () => {},
    }
) => {
    const [value, setValue] = useState("");

    const handleInputValue = (event: FormEvent<HTMLInputElement>) => {
        inputHandle();
        setValue(event.currentTarget.value);
    };

    const classes = [
        "UiInputConfirm",
        isLoading ? "UiInputConfirm_loading" : "",
        isSuccess ? "UiInputConfirm_success" : "",
        isError ? "UiInputConfirm_error" : "",
    ];

    return (
        <div className={classes.join(" ")}>
            <input
                className="UiInputConfirm__nativeInput"
                type={type}
                value={value}
                placeholder={placeholder}
                onInput={handleInputValue}
            />

            <button
                disabled={!value || isError}
                className="UiInputConfirm__extra-button"
                onClick={() => submitHandle(value)}
            >
                {
                    isLoading ? <Loading className="UiInputConfirm__icon spin-animation" /> :
                        isSuccess ? <Check className="UiInputConfirm__icon"  /> :
                            <ArrowRight className="UiInputConfirm__icon" />
                }
            </button>

            { isError && Boolean(errorText) &&
                <p className="UiInputConfirm__error">
                    { errorText }
                </p>
            }
        </div>
    );
};

export default UiInputConfirm;
