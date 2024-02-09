import { forwardRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import classNames from "classnames";

import "./UiInputSimple.scss";

import Eye from "@/assets/icons/ui/eye.svg?react";

interface Props {
    type?: string;
    label?: string;
    placeholder?: string;
    className?: string;
    error?: string;
    hasShowPassword?: boolean;
}

const UiInputSimple = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<never>>>(
    (
        {
            type = "text",
            label = "",
            placeholder = "",
            className = "",
            hasShowPassword = false,
            error = "",
            onChange,
            onBlur,
            name,
        },
        ref,
    ) => {
        const [showPassword, setShowPassword] = useState(false);
        const inputClasses = classNames(className, {
            "UiInputSimple--error": error,
        });

        const inputField = (
            <>
                <div className="UiInputSimple__inputWrapper">
                    <input
                        ref={ref}
                        onBlur={onBlur}
                        name={name}
                        className="UiInputSimple__nativeInput"
                        type={type === "password" ? (showPassword ? "text" : "password") : type}
                        placeholder={placeholder}
                        onChange={onChange}
                    />

                    {hasShowPassword && (
                        <button
                            type="button"
                            className="UiInputSimple__showPasswordButton"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <Eye />
                        </button>
                    )}
                </div>

                <span className="UiInputSimple__error">{error}</span>
            </>
        );
        const inputFieldWithLabel = (
            <label className="UiInputSimple__label">
                <span className="UiInputSimple__labelText">{label}</span>

                {inputField}
            </label>
        );

        return <div className={inputClasses}>{label ? inputFieldWithLabel : inputField}</div>;
    },
);

UiInputSimple.displayName = "UiInputSimple";

export default UiInputSimple;
