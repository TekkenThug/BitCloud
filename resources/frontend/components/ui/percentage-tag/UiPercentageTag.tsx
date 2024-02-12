import { FC } from "react";
import classNames from "classnames";

import styles from "./UiPercentageTag.module.scss";

interface Props {
    percentage: number;
}

const UiPercentageTag: FC<Props> = ({ percentage }) => {
    const processedPercentage = `${percentage < 0 ? "" : "+"}${percentage}%`;
    const classes = classNames(styles.UiPercentageTag, { [styles.negative]: percentage < 0 });

    return <div className={classes}>{processedPercentage}</div>;
};

export default UiPercentageTag;
