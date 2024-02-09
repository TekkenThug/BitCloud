import { useEffect, useRef } from "react";
import classNames from "classnames";
import Swiper from "swiper";

import { becomeCards } from "@/data/mocks.ts";
import { BREAKPOINTS } from "@/data/styles.ts";

import UiButton from "@/components/ui/button/UiButton.tsx";

import HomeBecomeCard from "./card/HomeBecomeCard.tsx";

import styles from "./HomeBecome.module.scss";

const HomeBecome = () => {
    const slider = useRef(null);
    useEffect(() => {
        if (!slider.current) return;

        new Swiper(slider.current, {
            slidesPerView: 1.1,
            spaceBetween: 8,
            centeredSlides: true,

            breakpoints: {
                [BREAKPOINTS.MOBILE]: {
                    enabled: false,
                },
            },
        });
    }, []);

    const sliderClasses = classNames("swiper", styles.cardListSlider);

    return (
        <section className={styles.HomeBecome}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Become a crypto trader in seconds</h2>

                    <p className={styles.subtitle}>
                        We`ve got everything you need to start trading.
                    </p>
                </div>

                <ul className={styles.cardList}>
                    {becomeCards.map((card, key) => (
                        <HomeBecomeCard
                            {...card}
                            key={key}
                        />
                    ))}
                </ul>

                <div
                    ref={slider}
                    className={sliderClasses}
                >
                    <div className="swiper-wrapper">
                        {becomeCards.map((card, key) => (
                            <div
                                className="swiper-slide"
                                key={key}
                            >
                                <HomeBecomeCard {...card} />
                            </div>
                        ))}
                    </div>
                </div>

                <UiButton
                    color="blue"
                    tag="a"
                    href="/"
                    size="large"
                    className={styles.button}
                >
                    Contact Us
                </UiButton>
            </div>
        </section>
    );
};

export default HomeBecome;
