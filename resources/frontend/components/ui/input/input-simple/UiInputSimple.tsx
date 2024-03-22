import { forwardRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import classNames from "classnames";

import styles from "./UiInputSimple.module.scss";

import Eye from "@/assets/icons/ui/eye.svg?react";

interface Props {
    type?: "text" | "password";
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
            [styles.error]: error,
        });

        const inputField = (
            <>
                <div className={styles.inputWrapper}>
                    <input
                        ref={ref}
                        onBlur={onBlur}
                        name={name}
                        className={styles.nativeInput}
                        type={type === "password" ? (showPassword ? "text" : "password") : type}
                        placeholder={placeholder}
                        onChange={onChange}
                    />

                    {hasShowPassword && (
                        <button
                            type="button"
                            className={styles.showPasswordButton}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <Eye />
                        </button>
                    )}
                </div>

                <span className={styles.errorField}>{error}</span>
            </>
        );
        const inputFieldWithLabel = (
            <label className={styles.label}>
                <span className={styles.labelText}>{label}</span>

                {inputField}
            </label>
        );

        return <div className={inputClasses}>{label ? inputFieldWithLabel : inputField}</div>;
    },
);

UiInputSimple.displayName = "UiInputSimple";

export default UiInputSimple;
