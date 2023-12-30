import { FC, ReactNode } from "react";

import "./UiButton.scss";

interface Props {
    disabled?: boolean;
    tag?: "button" | "a";
    color: "dark" | "blue";
    size?: "medium" | "large";
    href?: string;
    className?: string;
    clickHandler?: () => void; // TODO: replace
    children: ReactNode
}

const UiButton: FC<Props> = (
    {
        disabled = false,
        tag = "button",
        href = "",
        color,
        size = "medium",
        className = "",
        children,
        clickHandler
    }
) => {
    const handleClick = () => {
        if (clickHandler && !disabled) {
            clickHandler();
        }
    };

    const classes = [
        "UiButton",
        color ? `UiButton--color-${color}` : "",
        size ? `UiButton--size-${size}` : "",
        className ? `${className}` : "",
    ].filter(item => Boolean(item)).join(" ");

    return (
        <>
            {
                tag === "button" ?
                    <button
                        className={classes}
                        onClick={() => handleClick()}
                        disabled={disabled}
                    >
                        {children}
                    </button>
                    : tag === "a" &&
                    <a
                        href={href}
                        className={classes}
                        onClick={() => handleClick()}
                    >
                        {children}
                    </a>
            }
        </>
    );
};

export default UiButton;
