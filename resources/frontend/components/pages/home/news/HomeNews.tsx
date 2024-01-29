import { FC, useEffect, useRef } from "react";
import Swiper from "swiper";
import { Grid, Navigation } from "swiper/modules";

import useTabs from "@/hooks/useTabs";
import { BREAKPOINTS } from "@/data/styles.ts";

import UiButton from "@/components/ui/button/UiButton.tsx";

import HomeSectionHeader from "../common/HomeSectionHeader.tsx";
import HomeNewsItem from "./item/HomeNewsItem.tsx";

import styles from "./HomeNews.module.scss";

import ArrowLeft from "@/assets/icons/ui/arrow-left.svg?react";
import ArrowRight from "@/assets/icons/ui/arrow-right.svg?react";

const HomeNews: FC<{ id: string }> = ({ id }) => {
    const { tabs, activeTab, setTab } = useTabs([
        "All", "Bitcoin", "Blockchain", "Tutorial"
    ]);

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

    const slider = useRef(null);
    useEffect(() => {
        if (!slider.current) return;

        new Swiper(slider.current, {
            modules: [Navigation, Grid],

            slidesPerView: 2,
            speed: 400,
            spaceBetween: 32,

            navigation: {
                nextEl: `.${styles.navButton}:last-of-type`,
                prevEl: `.${styles.navButton}:first-of-type`,
            },

            breakpoints: {
                [BREAKPOINTS.ZERO]: {
                    slidesPerView: 1,
                    grid: {
                        rows: 2,
                        fill: "row"
                    },
                },
                [BREAKPOINTS.MOBILE]: {
                    grid: undefined,
                },
                [BREAKPOINTS.LAPTOP]: {
                    enabled: false,
                },
            }
        });
    }, []);

    return (
        <section className={ styles.HomeNews } id={ id }>
            <div className="container">
                <HomeSectionHeader
                    tabs={ tabs }
                    activeTab={ activeTab }
                    onChange={ setTab }
                    title="Learn crypto"
                    link="/"
                />

                <ul className={ styles.newsList }>
                    {news.map((item, index) =>
                        <li key={ index }>
                            <HomeNewsItem { ...item } isBig={ index === 0 } />
                        </li>
                    )}
                </ul>

                <div ref={ slider } className={ `${styles.newsListSlider} swiper` }>
                    <div className="swiper-wrapper">
                        {news.map((item, index) =>
                            <div key={ index } className="swiper-slide">
                                <HomeNewsItem { ...item } isBig={ index === 0 } />
                            </div>
                        )}
                    </div>

                    <div className={ styles.navButtonContainer }>
                        <button className={ styles.navButton }>
                            <ArrowLeft />
                        </button>

                        <button className={ styles.navButton }>
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                <UiButton
                    color="dark"
                    tag="a"
                    href="/"
                    className={ styles.viewMoreButton }
                >
                    View more
                </UiButton>
            </div>
        </section>
    );
};

export default HomeNews;
