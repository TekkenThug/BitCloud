import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./AuthSignHeader.module.scss";

interface Props {
    mode: "signin" | "signup"
}

const AuthSignHeader: FC<Props> = ({ mode }) => {
    return (
        <div className={ styles.AuthSignHeader }>
            { mode === "signin" ? "Don’t have an account?" : "Already have an account?" }

            <Link to={ { pathname: "/auth", search: `mode=${mode === "signin" ? "signup" : "signin" }` } }>
                { mode === "signin" ? "Sign up for free" : "Login" }
            </Link>
        </div>
    );
};

export default AuthSignHeader;
