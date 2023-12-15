import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { CurrencyRow } from "@/types/currency.ts";

import MarketTableRow from "./row/MarketTableRow.tsx";

import styles from "./MarketTable.module.scss";
import Arrows from "@/assets/icons/ui/arrow-two.svg?react";
import Coin from "@/assets/icons/finance/coin.svg?react";
import ChartBar from "@/assets/icons/finance/chart-bar.svg?react";

const MarketTable = () => {
	useEffect(() => { }, []);

	const { data: currencies } = useQuery({
		queryKey: ["marketCurrencies"],
		queryFn: () =>
			fetch("http://localhost:3000/currencies/").then((res) =>
				res.json()
			),
	});

	const [sort, setSort] = useState<keyof CurrencyRow>("number");
	const [descending, setDescending] = useState(false);

	const sortByField = (field: keyof CurrencyRow) => {
		if (field === sort) {
			setDescending((prev) => !prev);
		} else {
			setSort(field);
			setDescending(false);
		}
	};

	useEffect(() => {
		// setCurrencies((prevCurrencies) => {
		// 	return [...prevCurrencies].sort((a, b) => {
		// 		if (descending) {
		// 			if (a[sort] > b[sort]) {
		// 				return -1;
		// 			}

		// 			if (a[sort] < b[sort]) {
		// 				return 1;
		// 			}

		// 			return 0;
		// 		} else {
		// 			if (a[sort] < b[sort]) {
		// 				return -1;
		// 			}

		// 			if (a[sort] > b[sort]) {
		// 				return 1;
		// 			}

		// 			return 0;
		// 		}
		// 	});
		// });
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
							onClick={() => sortByField("name")}
						>
							Name <Arrows className={styles.tableHeaderCellArrow} />
						</div>

						<div
							className={styles.tableHeaderCell}
							onClick={() => sortByField("price")}
						>
							Price <Arrows className={styles.tableHeaderCellArrow} />
						</div>

						<div className={styles.tableHeaderCell}>24h %</div>

						<div className={styles.tableHeaderCell}>7d %</div>

						<div className={styles.tableHeaderCell}>
							Marketcap <Coin className={styles.tableHeaderCellIcon} />
						</div>

						<div className={styles.tableHeaderCell}>
							Volume (24h) <ChartBar className={styles.tableHeaderCellIcon} />
						</div>

						<div className={styles.tableHeaderCell}>Chart</div>
					</div>

					{currencies && currencies.length && (
						<div className={styles.tableContent}>
							{currencies.map((currency: CurrencyRow) => (
								<MarketTableRow key={currency.shortName} {...currency} />
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default MarketTable;
