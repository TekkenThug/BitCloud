import { Link } from "react-router-dom";

import styles from "./AuthBackground.module.scss";

import Logo from "@/assets/icons/common/logo.svg?react";
import Background from "@/assets/images/auth/background.png";

const AuthBackground = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Background})`,
            }}
            className={styles.AuthBackground}
        >
            <div className={styles.wrapper}>
                <Link
                    to="/"
                    className={styles.mainLink}
                >
                    <Logo className={styles.logo} />
                    BitCloud
                </Link>
            </div>
        </div>
    );
};

export default AuthBackground;
