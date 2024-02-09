import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import UiLoader from "@/components/ui/loader/UiLoader.tsx";

import "./UiButton.scss";

interface Props {
    disabled?: boolean;
    tag?: "button" | "a" | "router-link";
    color?: "dark" | "blue";
    size?: "medium" | "large";
    href?: string;
    className?: string;
    clickHandler?: () => void; // TODO: replace
    children: ReactNode;
    isLoading?: boolean;
}

const UiButton: FC<Props> = ({
    disabled = false,
    tag = "button",
    href = "",
    color = "dark",
    size = "medium",
    className = "",
    children,
    clickHandler,
    isLoading = false,
}) => {
    const handleClick = () => {
        if (clickHandler && !disabled) {
            clickHandler();
        }
    };

    const classes = classNames(
        "UiButton",
        `UiButton--color-${color}`,
        `UiButton--size-${size}`,
        className,
    );

    const content = isLoading ? (
        <UiLoader
            height={16}
            size="sm"
        />
    ) : (
        children
    );

    return (
        <>
            {tag === "button" ? (
                <button
                    className={classes}
                    onClick={() => handleClick()}
                    disabled={disabled}
                >
                    {content}
                </button>
            ) : tag === "a" ? (
                <a
                    href={href}
                    className={classes}
                    onClick={() => handleClick()}
                >
                    {content}
                </a>
            ) : (
                tag === "router-link" && (
                    <Link
                        to={href}
                        className={classes}
                        onClick={() => handleClick()}
                    >
                        {content}
                    </Link>
                )
            )}
        </>
    );
};

export default UiButton;
