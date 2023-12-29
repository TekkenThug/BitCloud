import React from "react";

import "./UiLabel.scss";

export type LabelColor = "black" | "green" | "red" | "blue" | "purple";

interface Props {
	title: string,
	color: LabelColor,
}

const UiLabel: React.FC<Props> = ({ title, color }) => {
    return (
        <div className={`UiLabel UiLabel_${color}`}>
            { title }
        </div>
    );
};

export default UiLabel;
