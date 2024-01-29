import { FC } from "react";

import "./UiPercentageTag.scss";

interface Props {
    percentage: number;
}

const UiPercentageTag: FC<Props> = ({ percentage }) => {
    const processedPercentage = `${percentage < 0 ? "" : "+"}${percentage}%`;
    const classes = [
        "UiPercentageTag",
        percentage < 0 ? "UiPercentageTag--negative" : ""
    ].filter(item => item).join(" ");

    return (
        <div className={ classes }>
            { processedPercentage }
        </div>
    );
};

export default UiPercentageTag;
