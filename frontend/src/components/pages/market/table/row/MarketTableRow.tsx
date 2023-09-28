import React from "react";

import { CurrencyRow } from "@/types/currency";

import ChartSmall from "@/components/common/charts/ChartSmall";
import UiButton from "@/components/ui/button/UiButton";

import styles from "./MarketTableRow.module.scss";
import Star from "@/assets/icons/ui/star.svg?react";
import Bitcoin from "@/assets/icons/currency/bitcoin.svg?react";
import Eth from "@/assets/icons/currency/eth.svg?react";
import USDT from "@/assets/icons/currency/usdt.svg?react";

const MarketTableRow: React.FC<CurrencyRow> = (
	{
		number,
		fullName,
		shortName,
		price,
		percentageForWeek,
		percentageForDay,
		capitalization,
		volume
	}
) => {
	const chartColor = percentageForDay < 0 ? "#FF6838" : "#58BD7D";

	const renderCurrencyIcon = () => {
		if (shortName === "BTC") {
			return <Bitcoin className={styles.cellCurrencyIcon} />;
		}

		if (shortName === "ETH") {
			return <Eth className={styles.cellCurrencyIcon} />;
		}

		if (shortName === "USDT") {
			return <USDT className={styles.cellCurrencyIcon} />;
		}
	};

	return (
		<div className={styles.MarketTableRow}>
			<div className={styles.cell}>
				<Star className={styles.cellStar} /> { number }
			</div>

			<div className={styles.cell}>
				{ renderCurrencyIcon() } { fullName } <span className={styles.shortName}>{ shortName }</span>
			</div>

			<div className={styles.cell}>
				${ price.toLocaleString("en-US", { minimumFractionDigits: 2 }) }
			</div>

			<div className={`${styles.cell} ${percentageForWeek > 0 ? styles.cell_positive : styles.cell_negative }`}>
				{ percentageForWeek > 0 ? "+" : "" }{ percentageForWeek }%
			</div>

			<div className={`${styles.cell} ${percentageForDay > 0 ? styles.cell_positive : styles.cell_negative }`}>
				{ percentageForDay > 0 ? "+" : "" }{ percentageForDay }%
			</div>

			<div className={styles.cell}>
				${ capitalization.toLocaleString("en-US", { minimumFractionDigits: 0 }) }
			</div>

			<div className={styles.cell}>
				${ volume.toLocaleString("en-US", { minimumFractionDigits: 0 }) }
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
