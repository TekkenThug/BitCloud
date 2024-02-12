import React from "react";
import classNames from "classnames";

import styles from "./UiLabel.module.scss";

export type LabelColor = "black" | "green" | "red" | "blue" | "purple";

interface Props {
    title: string;
    color: LabelColor;
}

const UiLabel: React.FC<Props> = ({ title, color }) => {
    const classes = classNames(styles.UiLabel, styles[color]);

    return <div className={classes}>{title}</div>;
};

export default UiLabel;
