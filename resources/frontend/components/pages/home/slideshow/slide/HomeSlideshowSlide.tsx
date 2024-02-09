import { FC } from "react";
import classNames from "classnames";

import UiButton from "@/components/ui/button/UiButton.tsx";

import styles from "./HomeSlideshowSlide.module.scss";

import templateImage from "@/assets/images/home/slider-template.png";

interface Props {
    title: string;
    category: string;
    description: string;
    link: string;
    linkText: string;
    className?: string;
}

const HomeSlideshowSlide: FC<Props> = ({
    category,
    title,
    description,
    link,
    linkText,
    className = "",
}) => {
    const classes = classNames(styles.HomeSlideshowSlide, className);

    return (
        <div className={classes}>
            <div className={styles.content}>
                <p className={styles.category}>{category}</p>

                <h3 className={styles.title}>{title}</h3>

                <p className={styles.description}>{description}</p>

                <UiButton
                    color="dark"
                    tag="a"
                    href={link}
                    className={styles.link}
                >
                    {linkText}
                </UiButton>
            </div>

            <img
                className={styles.image}
                src={templateImage}
                alt="Slide image"
            />
        </div>
    );
};

export default HomeSlideshowSlide;
