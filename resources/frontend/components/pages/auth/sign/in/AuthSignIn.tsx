import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import { setUser } from "@/store/auth";

import useTabs from "@/hooks/useTabs.ts";
import { Api, ApiError } from "@/services/api";
import { ErrorMessage } from "@/services/api/data-contracts.ts";
import { loginForm } from "@/services/validations/schemas/auth.ts";

import Address from "@/components/common/address/Address.tsx";
import UiButton from "@/components/ui/button/UiButton.tsx";
import UiInputSimple from "@/components/ui/input/input-simple/UiInputSimple.tsx";
import UiTab from "@/components/ui/tab/UiTab.tsx";

import commonStyles from "../AuthSign.module.scss";
import styles from "./AuthSignIn.module.scss";

type AuthCredentials = { email: string; password: string };

const AuthSignIn = () => {
    const { activeTab, setTab } = useTabs(["mobile", "email"], "email");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const {
        handleSubmit,
        setError,
        register,
        formState: { errors, isValid },
    } = useForm<AuthCredentials>({ resolver: zodResolver(loginForm) });

    const signIn = async (credentials: AuthCredentials) => {
        try {
            setIsLoading(true);
            const { data: user } = await Api.loginInApplication(credentials);
            dispatch(setUser(user));

            navigate("/market");
        } catch (e) {
            const error = (e as ApiError<ErrorMessage>).response?.data;

            if (!error) return;

            if (error.errors) {
                for (const key in error.errors) {
                    setError(key as keyof AuthCredentials, {
                        type: "manual",
                        message: error.errors[key as keyof AuthCredentials][0],
                    });
                }
            } else {
                toast(error.message, { type: "error" });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={styles.addressConfirm}>
                <span>Please ensure you are visiting the correct url.</span>

                <Address />
            </div>

            <div className={styles.tabContainer}>
                <UiTab
                    text="Email"
                    isActive={activeTab === "email"}
                    changeHandler={() => setTab("email")}
                />

                <UiTab
                    text="Mobile"
                    isActive={activeTab === "mobile"}
                    changeHandler={() => setTab("mobile")}
                />
            </div>

            <form
                className={commonStyles.form}
                onSubmit={handleSubmit(signIn)}
            >
                <div className={commonStyles.inputField}>
                    <UiInputSimple
                        label="Email"
                        placeholder="Email address"
                        error={errors.email?.message}
                        {...register("email")}
                    />
                </div>

                <div className={commonStyles.inputField}>
                    <UiInputSimple
                        label="password"
                        placeholder="Password"
                        type="password"
                        hasShowPassword
                        error={errors.password?.message}
                        {...register("password")}
                    />

                    <div className={styles.signature}>
                        <span>Scan to login</span> <Link to="/">Forgot password?</Link>
                    </div>
                </div>

                <UiButton
                    color="blue"
                    size="large"
                    className={commonStyles.submitButton}
                    disabled={!isValid}
                    isLoading={isLoading}
                >
                    Login
                </UiButton>
            </form>
        </>
    );
};

export default AuthSignIn;
