import { useState } from "react";

import HomeNewsItem from "./item/HomeNewsItem";

import UiButton from "@/components/ui/button/UiButton";
import UiTab from "@/components/ui/tab/UiTab";

import styles from "./HomeNews.module.scss";

const HomeNews = () => {
    const tabs = [
        "All", "Bitcoin", "Blockchain", "Tutorial"
    ];
    const [activeTab, setTab] = useState<string>(tabs[0]);

    const news = [
        {
            title: "Leveraged Tokens Now Available",
            description: "Good things come in 3s. Get 3x Leveraged tokens now.",
            date: "Jun 1, 2021",
            image: "https://cdn.britannica.com/83/189283-131-4BB2C246/Banknotes-world.jpg",
        },
        {
            title: "Leveraged Tokens Now Available",
            description: "Good things come in 3s. Get 3x Leveraged tokens now.",
            date: "Jun 1, 2021",
            image: "https://cdn.britannica.com/83/189283-131-4BB2C246/Banknotes-world.jpg",
        },
        {
            title: "Leveraged Tokens Now Available",
            description: "Good things come in 3s. Get 3x Leveraged tokens now.",
            date: "Jun 1, 2021",
            image: "https://cdn.britannica.com/83/189283-131-4BB2C246/Banknotes-world.jpg",
        },
        {
            title: "Leveraged Tokens Now Available",
            description: "Good things come in 3s. Get 3x Leveraged tokens now.",
            date: "Jun 1, 2021",
            image: "https://cdn.britannica.com/83/189283-131-4BB2C246/Banknotes-world.jpg",
        }
    ];

    return (
        <section className={styles.HomeNews}>
            <div className="container">
                <div className={styles.top}>
                    <div>
                        <h2 className={styles.title}>
                            Learn crypto
                        </h2>

                        <ul className={styles.tabList}>
                            { tabs.map(tab => 
                                <li>
                                    <UiTab
                                        isActive={tab === activeTab}
                                        text={tab}
                                        changeHandler={() => setTab(tab)}
                                    />
                                </li>
                            )}
                        </ul>
                    </div>

                    <UiButton color="dark">
                        View more
                    </UiButton> 
                </div>

                <div>
                    <div></div>

                    <ul className={styles.newsList}>
                        {news.map((item, index) =>
                            <li>
                                <HomeNewsItem {...item} isBig={index === 0}/>
                            </li>    
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HomeNews;