import React from "react";

import "./UiButton.scss";

interface UiButtonProps {
    disabled?: boolean;
	tag?: "button" | "a";
	color: "dark" | "blue";
	size?: "medium" | "large";
	href?: string;
	className?: string;
	clickHandler?: () => void; // TODO: replace
	children: React.ReactNode
}

const UiButton: React.FC<UiButtonProps> = (
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

    return (
        <>
            {
                tag === "button" ?
                    <button
                        className={`UiButton UiButton_color_${color} UiButton_size_${size} ${className}`}
                        onClick={() => handleClick()}
                        disabled={disabled}
                    >
                        { children }
                    </button>
                    : tag === "a" &&
					<a
					    href={href}
					    className={`UiButton UiButton_color_${color} UiButton_size_${size} ${className}`}
					    onClick={() => handleClick()}
					>
					    { children }
					</a>
            }
        </>
    );
};

export default UiButton;
