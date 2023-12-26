import React from "react";

import { Currency } from "@/services/api/contexts/currency/types";

import ChartSmall from "@/components/common/charts/ChartSmall";
import UiButton from "@/components/ui/button/UiButton";

import styles from "./MarketTableRow.module.scss";
import Star from "@/assets/icons/ui/star.svg?react";

const MarketTableRow: React.FC<Currency> = (
    {
        number,
        name,
        shortName,
        price,
        percentageForWeek,
        percentageForDay,
        marketCap,
        volume,
        icon
    }
) => {
    const chartColor = percentageForDay < 0 ? "#FF6838" : "#58BD7D";

    return (
        <div className={styles.MarketTableRow}>
            <div className={styles.cell}>
                <Star className={styles.cellStar} /> { number }
            </div>

            <div className={styles.cell}>
                <img className={styles.cellCurrencyIcon} src={icon} alt="Currency icon" /> { name }
                <span className={styles.shortName}>{ shortName }</span>
            </div>

            <div className={styles.cell}>
                <span className={styles.cellPrefix}>Price</span>

                ${ price.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }
            </div>

            <div className={`${styles.cell} ${percentageForWeek > 0 ? styles.cell_positive : styles.cell_negative }`}>
                <span className={styles.cellPrefix}>24h</span>

                { percentageForWeek > 0 ? "+" : "" }
                { percentageForWeek.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }%
            </div>

            <div className={`${styles.cell} ${percentageForDay > 0 ? styles.cell_positive : styles.cell_negative }`}>
                <span className={styles.cellPrefix}>7d</span>

                { percentageForDay > 0 ? "+" : "" }
                { percentageForDay.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }%
            </div>

            <div className={styles.cell}>
                <span className={styles.cellPrefix}>Marketcap</span>

                { marketCap.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }) }
            </div>

            <div className={styles.cell}>
                { volume.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }) }
            </div>

            <div className={styles.cell}>
                <ChartSmall
                    color={chartColor}
                />

                <UiButton
                    className={styles.buyButton}
                    color="blue"
                    tag="a"
                >
                    Buy
                </UiButton>
            </div>
        </div>
    );
};

export default MarketTableRow;
