import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

import { Api, ApiError } from "@/services/api";
import { ErrorMessage, RegisterCredentials } from "@/services/api/data-contracts.ts";
import { registerForm } from "@/services/validations/schemas/auth.ts";
import { ADULT_DATE } from "@/data/common.ts";

import UiButton from "@/components/ui/button/UiButton.tsx";
import UiCheckbox from "@/components/ui/checkbox/UiCheckbox.tsx";
import UiDatePicker from "@/components/ui/datepicker/UiDatePicker.tsx";
import UiInputSimple from "@/components/ui/input/input-simple/UiInputSimple.tsx";

import commonStyles from "../AuthSign.module.scss";
import styles from "./AuthSignUp.module.scss";

const AuthSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        setError,
        register,
        formState: { errors, isValid },
    } = useForm<RegisterCredentials>({ resolver: zodResolver(registerForm) });

    const submit = async (data: RegisterCredentials) => {
        try {
            setIsLoading(true);

            const { message } = await Api.registerUser({
                ...data,
                birthdate: format(data.birthdate, "yyyy-MM-dd"),
            });

            toast(message, { type: "success" });

            navigate("/auth?mode=signin");
        } catch (e) {
            const error = (e as ApiError<ErrorMessage>).response?.data;

            if (!error) return;

            if (error.errors) {
                for (const key in error.errors) {
                    setError(key as keyof RegisterCredentials, {
                        type: "manual",
                        message: error.errors[key as keyof RegisterCredentials][0],
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
            <div className={styles.alternate}>
                <p className={styles.alternateTitle}>Use Your OpenID to Sign up</p>

                <div className={styles.alternateButtons}>
                    <UiButton
                        color="blue"
                        disabled
                    >
                        Google
                    </UiButton>

                    <UiButton
                        color="blue"
                        disabled
                    >
                        Apple
                    </UiButton>
                </div>
            </div>

            <p className={styles.continueTitle}>Or continue with email</p>

            <form
                onSubmit={handleSubmit(submit)}
                className={commonStyles.form}
            >
                <div className={commonStyles.inputField}>
                    <UiInputSimple
                        label="First name"
                        placeholder="First name"
                        error={errors.first_name?.message}
                        {...register("first_name")}
                    />
                </div>

                <div className={commonStyles.inputField}>
                    <UiInputSimple
                        label="Last name"
                        placeholder="Last name"
                        error={errors.last_name?.message}
                        {...register("last_name")}
                    />
                </div>

                <div className={commonStyles.inputField}>
                    <Controller
                        control={control}
                        name="birthdate"
                        render={({ field }) => (
                            <UiDatePicker
                                placeholder="Birthdate"
                                onChange={field.onChange}
                                label="Birthdate"
                                value={field.value as unknown as Date}
                                maxDate={ADULT_DATE}
                                error={errors.birthdate?.message}
                            />
                        )}
                    />
                </div>

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
                </div>

                <div className={commonStyles.inputField}>
                    <UiInputSimple
                        label="confirm password"
                        placeholder="Password"
                        type="password"
                        hasShowPassword
                        error={errors.confirmPassword?.message}
                        {...register("confirmPassword")}
                    />
                </div>

                <div className={commonStyles.inputField}>
                    <UiCheckbox
                        error={Boolean(errors.agreement?.message)}
                        {...register("agreement")}
                    >
                        <p className={styles.checkboxText}>
                            By signing up I agree that I’m 18 years of age or older, to the{" "}
                            <a href="#">
                                User Agreements, Privacy Policy, Cookie Policy, E-Sign Consent.
                            </a>
                        </p>
                    </UiCheckbox>
                </div>

                <UiButton
                    color="blue"
                    disabled={!isValid}
                    className={commonStyles.submitButton}
                    size="large"
                    isLoading={isLoading}
                >
                    Sign up
                </UiButton>
            </form>
        </>
    );
};

export default AuthSignUp;
