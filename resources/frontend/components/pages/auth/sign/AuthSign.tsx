import { useState } from "react";
import { NavLink } from "react-router-dom";

import Address from "@/components/common/address/Address.tsx";
import UiButton from "@/components/ui/button/UiButton.tsx";
import UiInputSimple from "@/components/ui/input/input-simple/UiInputSimple.tsx";
import UiTab from "@/components/ui/tab/UiTab.tsx";

import styles from "./AuthSign.module.scss";

const AuthSign = () => {
    const [tab, setTab] = useState<"email" | "mobile">("email");

    return (
        <div className={styles.AuthSign}>
            <div className={styles.top}>
				Don’t have an account?

                <a href="/auth">
					Sign up for free
                </a>
            </div>

            <div className={styles.main}>
                <h1 className={styles.title}>
					Sign in to BitCloud
                </h1>

                <form
                    className={styles.form}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <div className={styles.addressConfirm}>
                        <span>Please ensure you are visiting the correct url.</span>

                        <Address />
                    </div>

                    <div className={styles.formContent}>
                        <div className={styles.tabContainer}>
                            <UiTab
                                text="Email"
                                isActive={tab === "email"}
                                changeHandler={() => setTab("email")}
                            />

                            <UiTab
                                text="Mobile"
                                isActive={tab === "mobile"}
                                changeHandler={() => setTab("mobile")}
                            />
                        </div>

                        <div>
                            <div className={styles.inputField}>
                                <UiInputSimple
                                    label="Email"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className={styles.inputField}>
                                <UiInputSimple
                                    label="password"
                                    placeholder="Password"
                                    type="password"
                                />

                                <div className={styles.signature}>
                                    <span>Scan to login</span> <NavLink to="/">Forgot password?</NavLink>
                                </div>
                            </div>

                            <UiButton
                                color="blue"
                                size="large"
                                className={styles.submitButton}
                            >
								Login
                            </UiButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthSign;
