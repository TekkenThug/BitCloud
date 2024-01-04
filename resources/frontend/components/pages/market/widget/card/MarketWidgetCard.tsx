import { FC } from "react";

import { quote } from "@/data/mocks";

import ChartSmall from "@/components/common/charts/ChartSmall";
import UiPercentageTag from "@/components/ui/percentage-tag/UiPercentageTag";

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
                <ChartSmall data={quote} />
            </div>
        </div>
    );
};

export default MarketWidgetCard;
