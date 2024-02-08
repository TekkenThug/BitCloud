import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { RootState } from "@/store";
import { isAuthSelector } from "@/store/auth/selectors.ts";

import AuthBackground from "./background/AuthBackground.tsx";
import AuthSign from "./sign/AuthSign.tsx";

import styles from "./AuthPage.module.scss";

type Mode = null | "signin" | "signup";

const AuthPage = () => {
    const isAuth = useSelector((state: RootState) => isAuthSelector(state));

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const [mode, setMode] = useState<Mode>(null);

    useEffect(() => {
        if (isAuth) {
            navigate("/");
            return;
        }

        const mode = searchParams.get("mode") as Mode;

        setMode(mode ?? "signin");
    }, [searchParams]);

    return (
        <div className={ styles.AuthPage }>
            <AuthBackground />

            { mode && <AuthSign mode={ mode } /> }
        </div>
    );
};

export default AuthPage;
