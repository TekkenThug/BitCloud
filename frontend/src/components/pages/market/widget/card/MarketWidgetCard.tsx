import React from "react";

import ChartSmall from "@/components/common/charts/ChartSmall";

import Logo from "@/assets/icons/currency/bitcoin.svg?react";
import styles from "./MarketWidgetCard.module.scss";

interface MarketWidgetCardProps {
	name: string;
	percentage: number;
	value: string;
	secondValue: string;
	className?: string;
}

const MarketWidgetCard: React.FC<MarketWidgetCardProps> = (
	{
		name,
		percentage,
		value,
		secondValue,
		className = ""
	}
) => {
	const chartColor = percentage < 0 ? "#FF6838" : "#58BD7D";
	const processedPercentage = `${percentage < 0 ? "" : "+"}${percentage}%`;

	return (
		<div className={`${styles.MarketWidgetCard} ${className}`}>
			<div className={styles.content}>
				<Logo className={styles.currency} />

				<div>
					<div className={styles.info}>
						<div className={styles.name}>
							{ name }
						</div>

						<div className={`${styles.percentage} ${percentage < 0 ? styles.percentage_negative : ""}`}>
							{ processedPercentage }
						</div>
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
