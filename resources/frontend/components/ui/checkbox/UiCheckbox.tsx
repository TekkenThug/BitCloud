import { forwardRef, ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";
import classNames from "classnames";

import styles from "./UiCheckbox.module.scss";

import Check from "@/assets/icons/ui/check.svg?react";

interface Props {
    children?: ReactNode;
    error?: boolean;
}

const UiCheckbox = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<never>>>(
    ({ children = null, error = false, onChange, onBlur, name }, ref) => {
        const classes = classNames(styles.UiCheckbox, { [styles.error]: error });

        return (
            <label className={classes}>
                <input
                    ref={ref}
                    type="checkbox"
                    className={styles.checkbox}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                />

                <span className={styles.fakeCheckbox}>
                    <Check />
                </span>

                {Boolean(children) && <div>{children}</div>}
            </label>
        );
    },
);

UiCheckbox.displayName = "UiCheckbox";

export default UiCheckbox;
