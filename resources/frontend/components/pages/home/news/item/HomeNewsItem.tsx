import { FC } from "react";
import classNames from "classnames";

import UiButton from "@/components/ui/button/UiButton";

import styles from "./HomeNewsItem.module.scss";

import ArrowRight from "@/assets/icons/ui/arrow-right-simple.svg?react";

interface Props {
    title: string;
    description: string;
    date: string;
    image: string;
    isBig?: boolean;
}

const HomeNewsItem: FC<Props> = (
    {
        title,
        description,
        date,
        image,
        isBig = false,
    }
) => {
    const classes = classNames(styles.HomeNewsItem, { [styles["HomeNewsItem--big"]]: isBig });

    return (
        <div className={ classes }>
            <div className={ styles.content }>
                <div className={ styles.contentText }>
                    <h3 className={ styles.title }>
                        {title}
                    </h3>

                    <p className={ styles.description }>
                        {description}
                    </p>
                </div>

                <time className={ styles.date }>
                    {date}
                </time>

                <UiButton
                    className={ styles.buttonMore }
                    color="dark"
                    size="large"
                >
                    Learn more <ArrowRight />
                </UiButton>
            </div>

            <img
                className={ styles.image }
                src={ image }
                alt="Article image"
            />
        </div>
    );
};

export default HomeNewsItem;
