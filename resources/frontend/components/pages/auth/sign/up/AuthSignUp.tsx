import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerUser } from "@/services/api/contexts/user";
import { RegisterCredentials } from "@/services/api/contexts/user/types.ts";
import { ErrorMessage } from "@/services/api/types.ts";
import { registerForm } from "@/services/validations/schemas/auth.ts";

import UiButton from "@/components/ui/button/UiButton.tsx";
import UiCheckbox from "@/components/ui/checkbox/UiCheckbox.tsx";
import UiInputSimple from "@/components/ui/input/input-simple/UiInputSimple.tsx";

import commonStyles from "../AuthSign.module.scss";
import styles from "./AuthSignUp.module.scss";

const AuthSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {
        handleSubmit,
        setError,
        register,
        formState: { errors, isValid }
    } = useForm<RegisterCredentials>({ resolver: zodResolver(registerForm) });

    const submit = async (data: RegisterCredentials) => {
        try {
            setIsLoading(true);

            const { message } = await registerUser(data);

            toast(message, { type: "success" });

            navigate("/auth?mode=signin");
        } catch (e) {
            const error = e as ErrorMessage<RegisterCredentials>;

            if (error.errors) {
                for (const key in error.errors) {
                    setError(
                        key as keyof RegisterCredentials,
                        {
                            type: "manual",
                            message: error.errors[key as keyof RegisterCredentials][0]
                        });
                }
            } else {
                toast((e as ErrorMessage).message, { type: "error" });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={ styles.alternate }>
                <p className={ styles.alternateTitle }>Use Your OpenID to Sign up</p>

                <div className={ styles.alternateButtons }>
                    <UiButton color="blue">
                        Google
                    </UiButton>

                    <UiButton color="blue">
                        Apple
                    </UiButton>
                </div>
            </div>

            <p className={ styles.continueTitle }>
                Or continue with email
            </p>

            <form onSubmit={ handleSubmit(submit) } className={ commonStyles.form }>
                <div className={ commonStyles.inputField }>
                    <UiInputSimple
                        label="Email"
                        placeholder="Email address"
                        error={ errors.email?.message }
                        { ...register("email") }
                    />
                </div>

                <div className={ commonStyles.inputField }>
                    <UiInputSimple
                        label="password"
                        placeholder="Password"
                        type="password"
                        hasShowPassword
                        error={ errors.password?.message }
                        { ...register("password") }
                    />
                </div>

                <div className={ commonStyles.inputField }>
                    <UiInputSimple
                        label="confirm password"
                        placeholder="Password"
                        type="password"
                        hasShowPassword
                        error={ errors.confirmPassword?.message }
                        { ...register("confirmPassword") }
                    />
                </div>

                <div className={ commonStyles.inputField }>
                    <UiCheckbox
                        error={ Boolean(errors.agreement?.message) }
                        { ...register("agreement") }
                    >
                        <p className={ styles.checkboxText }>
                            By signing up I agree that I’m 18 years of age or older,
                            to the <a href="#">User Agreements, Privacy Policy, Cookie Policy, E-Sign Consent.</a>
                        </p>
                    </UiCheckbox>
                </div>

                <UiButton
                    color="blue"
                    disabled={ !isValid }
                    className={ commonStyles.submitButton }
                    size="large"
                    isLoading={ isLoading }
                >
                    Sign up
                </UiButton>
            </form>
        </>
    );
};

export default AuthSignUp;
