import React from "react";
import classNames from "classnames";

import "./UiLabel.scss";

export type LabelColor = "black" | "green" | "red" | "blue" | "purple";

interface Props {
    title: string;
    color: LabelColor;
}

const UiLabel: React.FC<Props> = ({ title, color }) => {
    const classes = classNames("UiLabel", `UiLabel_${color}`);

    return <div className={classes}>{title}</div>;
};

export default UiLabel;
