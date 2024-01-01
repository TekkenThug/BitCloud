import { FC,useState } from "react";

import HomeSectionHeader from "../common/HomeSectionHeader.tsx";
import HomeNewsItem from "./item/HomeNewsItem.tsx";

import styles from "./HomeNews.module.scss";

const HomeNews: FC<{ id: string }> = ({ id }) => {
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
        <section className={styles.HomeNews} id={id}>
            <div className="container">
                <HomeSectionHeader
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={setTab}
                />

                <div>
                    <div></div>

                    <ul className={styles.newsList}>
                        {news.map((item, index) =>
                            <li key={index}>
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