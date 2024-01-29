import { FC } from "react";

import UiButton from "@/components/ui/button/UiButton";

import styles from "./HomeHeader.module.scss";

import ArrowDown from "@/assets/icons/ui/arrow-down.svg?react";
import image from "@/assets/images/home/header.png";

import HomeHeaderCard from "./card/HomeHeaderCard";

const HomeHeader: FC<{ id: string }> = ({ id }) => {
    const cards = [
        {
            icon: "/storage/images/currency-icons/BTC.svg",
            percentage: -0.79,
            shortName: "BTC/USDT",
            pricePerDay: 36641.20,
            pricePerWeek: 36641.20,
        },
        {
            icon: "/storage/images/currency-icons/BTC.svg",
            percentage: -0.79,
            shortName: "BTC/USDT",
            pricePerDay: 36641.20,
            pricePerWeek: 36641.20,
        },
        {
            icon: "/storage/images/currency-icons/BTC.svg",
            percentage: -0.79,
            shortName: "BTC/USDT",
            pricePerDay: 36641.20,
            pricePerWeek: 36641.20,
        },
        {
            icon: "/storage/images/currency-icons/BTC.svg",
            percentage: -0.79,
            shortName: "BTC/USDT",
            pricePerDay: 36641.20,
            pricePerWeek: 36641.20,
        }
    ];

    const scrollToNextSection = () =>  {
        const element = document.querySelector(`#${id}`);

        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className={ styles.HomeHeader }>
            <div className="container">
                <div className={ styles.top }>
                    <div className={ styles.left }>
                        <h1 className={ styles.title }>Buy & sell crypto in minutes</h1>

                        <p className={ styles.subtitle }>
                            Trade Bitcoin, Ethereum, USDT, and
                            the top altcoins on the legendary crypto asset exchange.
                        </p>

                        <UiButton
                            tag="a"
                            color="blue"
                            className={ styles.button }
                            size="large"
                        >
                            Get started now
                        </UiButton>
                    </div>

                    <div className={ styles.right }>
                        <img src={ image } alt="Header image" />
                    </div>

                    <button className={ styles.buttonDown } onClick={ scrollToNextSection }>
                        <ArrowDown />
                    </button>
                </div>

                <div className={ styles.list }>
                    {cards.map((card, index) =>
                        <HomeHeaderCard { ...card } key={ index } />
                    )}
                </div>
            </div>
        </section>
    );
};

export default HomeHeader;
