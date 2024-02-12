import { FC } from "react";
import classNames from "classnames";

import styles from "./UiTab.module.scss";

interface Props {
    text: string;
    isActive: boolean;
    isDisabled?: boolean;
    changeHandler: (value: string) => void;
    className?: string;
    theme?: "dark" | "light";
}

const UiTab: FC<Props> = ({
    text,
    isActive,
    isDisabled = false,
    changeHandler = () => {},
    className = "",
    theme = "dark",
}) => {
    const classes = classNames(styles.UiTab, styles[theme], className, {
        [styles.active]: isActive,
        [styles.disabled]: isDisabled,
    });

    return (
        <button
            className={classes}
            onClick={() => changeHandler(text)}
        >
            {text}
        </button>
    );
};

export default UiTab;
