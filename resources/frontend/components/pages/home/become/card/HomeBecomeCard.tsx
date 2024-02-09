import { FC } from "react";

import styles from "./HomeBecomeCard.module.scss";

interface Props {
    image: string;
    title: string;
    description: string;
}

const HomeBecomeCard: FC<Props> = ({ image, title, description }) => {
    return (
        <li className={styles.HomeBecomeCard}>
            <img
                className={styles.image}
                src={image}
                alt="Become image"
            />

            <div>
                <h4 className={styles.title}>{title}</h4>

                <p className={styles.description}>{description}</p>
            </div>
        </li>
    );
};

export default HomeBecomeCard;
