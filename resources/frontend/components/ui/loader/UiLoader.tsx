import { FC } from "react";
import classNames from "classnames";

import styles from "./UiLoader.module.scss";

import Loading from "@/assets/icons/controls/loading.svg?react";

interface Props {
    covered?: boolean;
    height?: number;
    size?: "sm" | "md" | "l";
    color?: "white" | "dark";
    className?: string;
}

const UiLoader: FC<Props> = ({
    covered = false,
    height,
    size = "md",
    color = "white",
    className = "",
}) => {
    const wrapperClasses = classNames({ [styles.covered]: covered });
    const classes = classNames("spin-animation", styles[size], styles[color], className);

    const spinner = <Loading className={classes} />;

    return covered ? (
        <div
            style={{ height: height ? `${height}px` : "unset" }}
            className={wrapperClasses}
        >
            {spinner}
        </div>
    ) : (
        spinner
    );
};

export default UiLoader;
