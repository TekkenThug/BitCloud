import { FC } from "react";

import "./UiLoader.scss";

import Loading from "@/assets/icons/controls/loading.svg?react";

interface Props {
    covered?: boolean,
    height?: number,
    size?: "sm" | "md" | "l"
    color?: "white";
}

const UiLoader: FC<Props> = ({
    covered = false,
    height = 200,
    size = "md",
    color = "white"
}) => {
    const classes = ["spin-animation", `UiLoader_size-${size}`, `UiLoader_color-${color}`].join(" ");

    return (
        <div
            style={ { height: `${height}px` } }
            className={ `UiLoader__wrapper ${covered ? "UiLoader__wrapper_covered" : ""}` }
        >
            <Loading
                className={ classes }
            />
        </div>
    );
};

export default UiLoader;
