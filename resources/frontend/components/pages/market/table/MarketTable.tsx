import { useEffect, useState } from "react";
import { useRequest } from "ahooks";
import classNames from "classnames";

import { QuotatedCurrency } from "@/types";

import { Api } from "@/services/api";
import { Currency } from "@/services/api/data-contracts.ts";

import UiLoader from "@/components/ui/loader/UiLoader";

import MarketTableRow from "./row/MarketTableRow.tsx";

import styles from "./MarketTable.module.scss";

import ChartBar from "@/assets/icons/finance/chart-bar.svg?react";
import Coin from "@/assets/icons/finance/coin.svg?react";
import Arrows from "@/assets/icons/ui/arrow-two.svg?react";

type SortKeys = Exclude<keyof QuotatedCurrency, "icon">;

const MarketTable = () => {
    const currencyAdapter = (arr: Currency[]): QuotatedCurrency[] => {
        return arr.map((item, index) => {
            return {
                ...item,
                number: index + 1,
                quote: item.quote.map((innerItem) => ({
                    x: innerItem.date,
                    y: innerItem.value,
                })),
            };
        });
    };

    const { loading } = useRequest(() => Api.getCurrencies({ limit: 10 }), {
        onSuccess: ({ data }) => setSortData(currencyAdapter(data)),
    });
    const [sortData, setSortData] = useState<QuotatedCurrency[]>([]);

    const [sort, setSort] = useState<SortKeys>("number");
    const [descending, setDescending] = useState(false);

    const sortByField = (field: SortKeys) => {
        if (field === sort) {
            setDescending((prev) => !prev);
        } else {
            setSort(field);
            setDescending(false);
        }
    };

    useEffect(() => {
        setSortData((prevCurrencies) => {
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

    const cellClasses = classNames(styles.tableHeaderCell, styles.tableHeaderCell_cell_number);

    return (
        <section className={styles.MarketTable}>
            <div className="container">
                {loading ? (
                    <UiLoader
                        covered
                        height={200}
                    />
                ) : (
                    <div>
                        <div className={styles.tableHeader}>
                            <div
                                className={cellClasses}
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

                        <div className={styles.tableContent}>
                            {sortData.map((currency) => (
                                <MarketTableRow
                                    key={currency.shortName}
                                    {...currency}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MarketTable;
