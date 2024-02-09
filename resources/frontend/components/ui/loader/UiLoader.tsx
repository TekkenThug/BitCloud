import { FC } from "react";
import classNames from "classnames";

import "./UiLoader.scss";

import Loading from "@/assets/icons/controls/loading.svg?react";

interface Props {
    covered?: boolean;
    height?: number;
    size?: "sm" | "md" | "l";
    color?: "white";
}

const UiLoader: FC<Props> = ({ covered = false, height, size = "md", color = "white" }) => {
    const wrapperClasses = classNames("UiLoader__wrapper", { UiLoader__wrapper_covered: covered });
    const classes = classNames(
        "spin-animation",
        `UiLoader_size-${size}`,
        `UiLoader_color-${color}`,
    );

    return (
        <div
            style={{ height: height ? `${height}px` : "unset" }}
            className={wrapperClasses}
        >
            <Loading className={classes} />
        </div>
    );
};

export default UiLoader;
