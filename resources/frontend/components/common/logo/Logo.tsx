import { FC } from "react";

import styles from "./Logo.module.scss";

import Logotype from "@/assets/icons/common/logo.svg?react";

interface Props {
    isLink?: boolean;
    className?: string;
}

const Logo: FC<Props> = (
    {
        isLink = false,
        className = ""
    },
) => {
    const classes = [`${styles.Logo}`, className].filter(name => name).join(" ");

    return (
        isLink ?
            <a href="/" className={classes}>
                <Logotype className={styles.image} />

                BitCloud
            </a> :
            <div className={classes}>
                <Logotype className={styles.image} />

                BitCloud
            </div>
    );
};

export default Logo;
