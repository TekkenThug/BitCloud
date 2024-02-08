import { useEffect, useRef } from "react";
import classNames from "classnames";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import { BREAKPOINTS } from "@/data/styles.ts";

import Logo from "@/components/common/logo/Logo.tsx";

import HomeSlideshowSlide from "./slide/HomeSlideshowSlide.tsx";

import styles from "./HomeSlideshow.module.scss";

import ArrowLeft from "@/assets/icons/ui/arrow-left.svg?react";
import ArrowRight from "@/assets/icons/ui/arrow-right.svg?react";

const HomeSlideshow = () => {
    const slider = useRef(null);

    useEffect(() => {
        if (!slider.current) return;

        new Swiper(slider.current, {
            modules: [Navigation],

            slidesPerView: 1,
            speed: 800,
            loop: true,
            spaceBetween: 50,

            navigation: {
                nextEl: `.${styles.navButton}:last-of-type`,
                prevEl: `.${styles.navButton}:first-of-type`,
            },

            breakpoints: {
                [BREAKPOINTS.ZERO]: {
                    enabled: false,
                },
                [BREAKPOINTS.MOBILE]: {
                    enabled: true,
                },
            }
        });
    }, []);

    const slides = [
        {
            category: "crypto news",
            title: "Be Part of our Global Community",
            description: "Let’s stay in touch. Join our communities to keep up with the BitCloud team and our traders from across the world.",
            link: "/",
            linkText: "Join now",
        },
        {
            category: "crypto news",
            title: "Be Part of our Global Community",
            description: "Let’s stay in touch. Join our communities to keep up with the BitCloud team and our traders from across the world.",
            link: "/",
            linkText: "Join now",
        },
        {
            category: "crypto news",
            title: "Be Part of our Global Community",
            description: "Let’s stay in touch. Join our communities to keep up with the BitCloud team and our traders from across the world.",
            link: "/",
            linkText: "Join now",
        }
    ];

    const sliderClasses = classNames("swiper", styles.slider);

    return (
        <section className={ styles.HomeSlideshow }>
            <div className="container">
                <div className={ styles.header }>
                    <Logo />

                    <h2 className={ styles.title }>
                        Stay in the know on crypto with BitCloud
                    </h2>

                    <p className={ styles.subtitle }>
                        A creative agency that lead and inspire
                    </p>
                </div>

                <div className={ styles.sliderWrapper }>
                    <button className={ styles.navButton }>
                        <ArrowLeft />
                    </button>

                    <div ref={ slider } className={ sliderClasses }>
                        <div className="swiper-wrapper">
                            {
                                slides.map((slide, index) => (
                                    <HomeSlideshowSlide className="swiper-slide" { ...slide } key={ index } />
                                ))
                            }
                        </div>
                    </div>

                    <button className={ styles.navButton }>
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeSlideshow;
