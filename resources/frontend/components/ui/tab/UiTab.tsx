import { FC } from "react";
import classNames from "classnames";

import "./UiTab.scss";

interface Props {
    text: string,
    isActive: boolean,
    changeHandler: (value: string) => void,
    className?: string
    theme?: "dark" | "light",
}

const UiTab: FC<Props> = (
    {
        text,
        isActive = false,
        changeHandler,
        className = "",
        theme = "dark"
    }) => {
    const classes = classNames("UiTab", className, `UiTab_theme_${theme}`, { "UiTab_active": isActive });

    return (
        <button
            className={ classes }
            onClick={ () => changeHandler(text) }
        >
            { text }
        </button>
    );
};

export default UiTab;
