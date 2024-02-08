import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.scss";

import Logotype from "@/assets/icons/common/logo.svg";
import classNames from "classnames";

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
    const classes = classNames(className, styles.Logo);
    const content = <>
        <img
            className={ styles.image }
            src={ Logotype }
            alt="Logo"
        />

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
