import { useState } from "react";

import useTabs from "@/hooks/useTabs";
import { formatPercent, formatPrice } from "@/utils/numbers";
import { cryptoOptions, quote } from "@/data/mocks";

import ChartSmall from "@/components/common/charts/ChartSmall.tsx";
import UiButton from "@/components/ui/button/UiButton.tsx";
import UiSelect from "@/components/ui/select/UiSelect.tsx";

import HomeSectionHeader from "../common/HomeSectionHeader.tsx";

import styles from "./HomeTrend.module.scss";

const HomeTrend = () => {
    const { tabs, activeTab, setTab } = useTabs([
        "All", "DeFi", "Innovation", "POS", "NFT", "POW", "Storage"
    ]);

    const tableHeaders = ["#", "Name", "Price", "24h change", "Chart", "Trade"];
    const tableData = [
        {
            number: 1,
            image: "/storage/images/currency-icons/BTC.svg",
            shortName: "BTC",
            name: "Bitcoin",
            price: 36201.34,
            percentage: 2.04,
            quote,
        },
        {
            number: 1,
            image: "/storage/images/currency-icons/BTC.svg",
            shortName: "BTC",
            name: "Bitcoin",
            price: 36201.34,
            percentage: 2.04,
            quote,
        },
        {
            number: 1,
            image: "/storage/images/currency-icons/BTC.svg",
            shortName: "BTC",
            name: "Bitcoin",
            price: 36201.34,
            percentage: 2.04,
            quote,
        },
    ];

    return (
        <section className={styles.HomeTrend}>
            <div className="container">
                <HomeSectionHeader
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={setTab}
                    title="Market trend"
                    link="/"
                    isMarket
                />

                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        {tableHeaders.map(cell => (
                            <div
                                className={styles.tableHeaderCell}
                                key={cell}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>

                    <div className={styles.tableBody}>
                        {tableData.map((row, index) => (
                            <div className={styles.tableRow} key={index}>
                                <div className={styles.tableRowCell}>
                                    {row.number}
                                </div>

                                <div className={styles.tableRowCell}>
                                    <img
                                        className={styles.tableRowCellIcon}
                                        src={row.image}
                                        alt="Currency icon"
                                    />

                                    {row.name}

                                    <span className={styles.tableRowCellShortName}>{row.shortName}</span>
                                </div>

                                <div className={styles.tableRowCell}>
                                    ${formatPrice(row.price)}
                                </div>

                                <div
                                    className={
                                        `${styles.tableRowCell}
                                        ${styles.tableRowCellPercentage}
                                        ${row.percentage < 0 ? styles["tableRowCellPercentage--negative"] : ""}`
                                    }
                                >
                                    {formatPercent(row.percentage)}
                                </div>

                                <div className={styles.tableRowCell}>
                                    <ChartSmall isNegative={row.percentage < 0} data={row.quote} />
                                </div>

                                <div className={styles.tableRowCell}>
                                    <UiButton color="dark" tag="a" href="/">
                                        Trade
                                    </UiButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <UiButton
                    color="dark"
                    tag="a"
                    href="/"
                    className={styles.viewMoreButton}
                >
                    View more
                </UiButton>
            </div>
        </section>
    );
};

export default HomeTrend;
