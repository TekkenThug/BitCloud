import styles from "./HomeWork.module.scss";

import image3 from "@/assets/images/common/become-1.png";
import image1 from "@/assets/images/common/become-2.png";
import image2 from "@/assets/images/common/become-3.png";
import image4 from "@/assets/images/common/become-4.png";

const HomeWork = () => {
    const steps = [
        {
            title: "Download",
            description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
            image: image1,
        },
        {
            title: "Connect wallet",
            description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
            image: image2,
        },
        {
            title: "Start trading",
            description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
            image: image3,
        },
        {
            title: "Earn money",
            description: "Stacks is a production-ready library of stackable content blocks built in React Native.",
            image: image4,
        }
    ];

    return (
        <section className={styles.HomeWork}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        How it work
                    </h2>

                    <p className={styles.subtitle}>
                        Stacks is a production-ready library of stackable
                        content blocks built in React Native.
                    </p>
                </div>

                <ul className={styles.imageList}>
                    {steps.map((step, index) => (
                        <li key={index} className={styles.itemImageWrapper}>
                            <img className={styles.itemImage} src={step.image} alt="Work step image" />
                        </li>
                    ))}
                </ul>

                <ul className={styles.list}>
                    {steps.map((step, index) => (
                        <li key={index} className={styles.item}>
                            <span className={styles.itemStep}>
                                Step {index + 1}
                            </span>

                            <h4 className={styles.itemTitle}>
                                {step.title}
                            </h4>

                            <p className={styles.itemDescription}>
                                {step.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeWork;
