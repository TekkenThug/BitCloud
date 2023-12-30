import UiButton from "@/components/ui/button/UiButton";

import styles from "./HomeHeader.module.scss";

import image from "@/assets/images/home/header.png";
import ArrowDown from "@/assets/icons/ui/arrow-down.svg?react";

const HomeHeader = () => {
    return (
        <section className={styles.HomeHeader}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>Buy & sell crypto in minutes</h1>

                        <p className={styles.subtitle}>
                            Trade Bitcoin, Ethereum, USDT, and
                            the top altcoins on the legendary crypto asset exchange.
                        </p>

                        <UiButton
                            tag="a"
                            color="blue"
                            className={styles.button}
                            size="large"
                        >
                            Get started now
                        </UiButton>
                    </div>

                    <div className={styles.right}>
                        <img src={image} alt="Header image" />
                    </div>

                    <button className={styles.buttonDown}>
                        <ArrowDown />
                    </button>
                </div>

                <div></div>
            </div>
        </section>
    );
};

export default HomeHeader;