import { FC } from "react";

import AuthSignHeader from "@/components/pages/auth/sign/header/AuthSignHeader.tsx";
import AuthSignIn from "@/components/pages/auth/sign/in/AuthSignIn.tsx";
import AuthSignUp from "@/components/pages/auth/sign/up/AuthSignUp.tsx";

import styles from "./AuthSign.module.scss";

interface Props {
    mode: "signin" | "signup";
}

const AuthSign: FC<Props> = ({ mode }) => {
    return (
        <div className={styles.AuthSign}>
            <AuthSignHeader mode={mode} />

            <div className={styles.main}>
                <h1 className={styles.title}>
                    {mode === "signin" ? "Sign in to BitCloud" : "Sign up"}
                </h1>

                {mode === "signin" ? <AuthSignIn /> : <AuthSignUp />}
            </div>
        </div>
    );
};

export default AuthSign;
