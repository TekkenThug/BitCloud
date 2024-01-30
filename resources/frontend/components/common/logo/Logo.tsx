import { FC } from "react";
import { Link } from "react-router-dom";

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
    const content = <>
        <Logotype className={ styles.image } />

        BitCloud
    </>;

    return (
        isLink ?
            <Link to="/" className={ classes }>
                { content }
            </Link> :
            <div className={ classes }>
                { content }
            </div>
    );
};

export default Logo;
