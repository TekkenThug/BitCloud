import { useEffect, useState } from "react";

import { CurrencyRow } from "types/currency";

import MarketTableRow from "./row/MarketTableRow";

import styles from "./MarketTable.module.scss";
import { ReactComponent as Arrows } from "assets/icons/ui/arrow-two.svg";
import { ReactComponent as Coin } from "assets/icons/finance/coin.svg";
import { ReactComponent as ChartBar } from "assets/icons/finance/chart-bar.svg";

const MarketTable = () => {
	const [
		currencies,
		setCurrencies
	] = useState<CurrencyRow[]>([
		{
			number: 1,
			fullName: "Bitcoin",
			shortName: "BTC",
			price: 36641.20,
			percentageForDay: 6.04,
			percentageForWeek: -1.71,
			capitalization: 328564656654,
			volume: 328564656654
		},
		{
			number: 2,
			fullName: "Ethereum",
			shortName: "ETH",
			price: 2605.95,
			percentageForDay: 6.04,
			percentageForWeek: 0.05,
			capitalization: 328564656654,
			volume: 328564656654
		},
		{
			number: 3,
			fullName: "Tether",
			shortName: "USDT",
			price: 1,
			percentageForDay: -3.04,
			percentageForWeek: -1.71,
			capitalization: 328564656654,
			volume: 328564656654
		}
	]);
	const [sort, setSort] = useState<keyof CurrencyRow>("number");
	const [descending, setDescending] = useState(false);

	const sortByField = (field: keyof CurrencyRow) => {
		if (field === sort) {
			setDescending(prev => !prev);
		} else {
			setSort(field);
			setDescending(false);
		}
	};

	useEffect(() => {
		setCurrencies(prevCurrencies => {
			return [...prevCurrencies].sort((a, b) => {
				if (descending) {
					if (a[sort] > b[sort]) {
						return -1;
					}

					if (a[sort] < b[sort]) {
						return 1;
					}

					return 0;
				} else {
					if (a[sort] < b[sort]) {
						return -1;
					}

					if (a[sort] > b[sort]) {
						return 1;
					}

					return 0;
				}
			});
		});
	}, [sort, descending]);

	return (
		<section className={styles.MarketTable}>
			<div className="container">
				<div>
					<div className={styles.tableHeader}>
						<div
							className={`${styles.tableHeaderCell} ${styles.tableHeaderCell_cell_number}`}
							onClick={() => sortByField("number")}
						>
							# <Arrows className={styles.tableHeaderCellArrow} />
						</div>

						<div
							className={styles.tableHeaderCell}
							onClick={() => sortByField("fullName")}
						>
							Name <Arrows className={styles.tableHeaderCellArrow} />
						</div>

						<div
							className={styles.tableHeaderCell}
							onClick={() => sortByField("price")}
						>
							Price <Arrows className={styles.tableHeaderCellArrow} />
						</div>

						<div className={styles.tableHeaderCell}>
							24h %
						</div>

						<div className={styles.tableHeaderCell}>
							7d %
						</div>

						<div className={styles.tableHeaderCell}>
							Marketcap <Coin className={styles.tableHeaderCellIcon} />
						</div>

						<div className={styles.tableHeaderCell}>
							Volume (24h) <ChartBar className={styles.tableHeaderCellIcon} />
						</div>

						<div className={styles.tableHeaderCell}>
							Chart
						</div>
					</div>

					{
						currencies && currencies.length &&
						<div className={styles.tableContent}>
							{
								currencies.map(currency => (
									<MarketTableRow
										key={currency.shortName}
										{...currency}
									/>
								))
							}
						</div>
					}
				</div>
			</div>
		</section>
	);
};

export default MarketTable;
