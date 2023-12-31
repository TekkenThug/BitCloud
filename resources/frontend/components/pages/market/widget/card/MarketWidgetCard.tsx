import { FC } from "react";

import UiPercentageTag from "@/components/ui/percentage-tag/UiPercentageTag";
import ChartSmall from "@/components/common/charts/ChartSmall";

import styles from "./MarketWidgetCard.module.scss";

import Logo from "@/assets/icons/currency/bitcoin.svg?react";

interface MarketWidgetCardProps {
	name: string;
	percentage: number;
	value: string;
	secondValue: string;
	className?: string;
}

const MarketWidgetCard: FC<MarketWidgetCardProps> = (
    {
        name,
        percentage,
        value,
        secondValue,
        className = ""
    }
) => {
    const chartColor = percentage < 0 ? "#FF6838" : "#58BD7D";

    return (
        <div className={`${styles.MarketWidgetCard} ${className}`}>
            <div className={styles.content}>
                <Logo className={styles.currency} />

                <div>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            { name }
                        </div>

                        <UiPercentageTag percentage={percentage} />
                    </div>

                    <div className={styles.value}>
                        { value }
                    </div>

                    <div className={styles.secondValue}>
                        { secondValue }
                    </div>
                </div>
            </div>

            <div className={styles.chart}>
                <ChartSmall color={chartColor} />
            </div>
        </div>
    );
};

export default MarketWidgetCard;
