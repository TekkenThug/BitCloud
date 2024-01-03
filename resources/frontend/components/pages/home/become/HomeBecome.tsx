import UiButton from "@/components/ui/button/UiButton.tsx";

import HomeBecomeCard from "./card/HomeBecomeCard.tsx";

import styles from "./HomeBecome.module.scss";

import Become1 from "@/assets/images/common/become-1.png";
import Become2 from "@/assets/images/common/become-2.png";
import Become3 from "@/assets/images/common/become-3.png";

const HomeBecome = () => {
    const cards = [
        {
            image: Become1,
            title: "Buy & Sell Crypto",
            description: "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers."
        },
        {
            image: Become2,
            title: "Trade Assets",
            description: "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers."
        },
        {
            image: Become3,
            title: "Earn Rewards for Trading",
            description: "We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers."
        }
    ];

    return (
        <section className={styles.HomeBecome}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Become a crypto trader in seconds</h2>

                    <p className={styles.subtitle}>
                        We've got everything you need to start trading.
                    </p>
                </div>

                <ul className={styles.cardList}>
                    {cards.map((card, key) => <HomeBecomeCard {...card} key={key} />)}
                </ul>

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
