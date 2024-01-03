import useTabs from "@/hooks/useTabs";
import { formatPercent, formatPrice } from "@/utils/numbers";

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
            quote: [
                {
                    "date": "2023-12-30",
                    "value": 13448
                },
                {
                    "date": "2023-12-31",
                    "value": 37451
                },
                {
                    "date": "2024-01-01",
                    "value": 39736
                },
                {
                    "date": "2024-01-02",
                    "value": 45570.6887703269
                }
            ]
        }
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
                        {tableData.map(row => (
                            <div className={styles.tableRow}>
                                <div>
                                    {row.number}
                                </div>

                                <div>
                                    <img src={row.image} alt="Currency icon" />

                                    {row.name}

                                    {row.shortName}
                                </div>

                                <div>
                                    ${formatPrice(row.price)}
                                </div>

                                <div>
                                    {formatPercent(row.percentage)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTrend;