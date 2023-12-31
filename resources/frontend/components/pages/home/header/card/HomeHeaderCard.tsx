import { FC } from "react";

import { formatPrice } from "@/components/utils/numbers";

import UiPercentageTag from "@/components/ui/percentage-tag/UiPercentageTag";

import styles from "./HomeHeaderCard.module.scss";

interface Props {
    icon: string;
    shortName: string;
    percentage: number;
    pricePerWeek: number;
    pricePerDay: number;
}

const HomeHeaderCard: FC<Props> = (
    {
        shortName,
        percentage,
        pricePerDay,
        pricePerWeek,
    }
) => {
    return (
        <div className={styles.HomeHeaderCard}>
            <img
                className={styles.icon}
                src="/storage/images/currency-icons/BTC.svg"
                alt="Currency icon"
            />

            <div className={styles.top}>
                <span className={styles.shortName}>{shortName}</span>

                <UiPercentageTag percentage={percentage} />
            </div>

            <strong className={styles.price}>
                {formatPrice(pricePerDay)}
            </strong>

            <span className={styles.pricePerWeek}>
                {formatPrice(pricePerWeek)}
            </span>
        </div>
    );
};

export default HomeHeaderCard;