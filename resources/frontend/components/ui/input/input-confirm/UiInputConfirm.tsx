import { FC, FormEvent, useState } from "react";
import classNames from "classnames";

import UiLoader from "@/components/ui/loader/UiLoader.tsx";

import styles from "./UiInputConfirm.module.scss";

import ArrowRight from "@/assets/icons/ui/arrow-right.svg?react";
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

const UiInputConfirm: FC<UiInputProps> = ({
    type = "text",
    placeholder = "",
    isLoading = false,
    isSuccess = false,
    isError = false,
    errorText = "",
    submitHandle,
    inputHandle = () => {},
}) => {
    const [value, setValue] = useState("");

    const handleInputValue = (event: FormEvent<HTMLInputElement>) => {
        inputHandle();
        setValue(event.currentTarget.value);
    };

    const classes = classNames(styles.UiInputConfirm, {
        [styles.loading]: isLoading,
        [styles.success]: isSuccess,
        [styles.error]: isError,
    });

    return (
        <div className={classes}>
            <input
                className={styles.nativeInput}
                type={type}
                value={value}
                placeholder={placeholder}
                onInput={handleInputValue}
            />

            <button
                disabled={!value || isError}
                className={styles.extraButton}
                onClick={() => submitHandle(value)}
            >
                {isLoading ? (
                    <UiLoader
                        color="white"
                        className={styles.icon}
                    />
                ) : isSuccess ? (
                    <Check className={styles.icon} />
                ) : (
                    <ArrowRight className={styles.icon} />
                )}
            </button>

            {isError && Boolean(errorText) && <p className={styles.errorField}>{errorText}</p>}
        </div>
    );
};

export default UiInputConfirm;
