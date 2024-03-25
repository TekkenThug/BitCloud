import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { RootState } from "@/store";
import { avatarSelector, isAuthSelector } from "@/store/auth/selectors.ts";

import Logo from "@/components/common/logo/Logo";
import UiButton from "@/components/ui/button/UiButton";

import styles from "./Header.module.scss";

import Lightning from "@/assets/icons/ce/lightning.svg?react";
import ArrowDown from "@/assets/icons/ui/arrow-down-simple.svg?react";
import Bell from "@/assets/icons/ui/bell.svg?react";

const Header = () => {
    const goToWallet = () => {};
    const isAuth = useSelector((state: RootState) => isAuthSelector(state));
    const avatar = useSelector((state: RootState) => avatarSelector(state));

    const hasNotifications = true;

    const lightningButtonClasses = classNames(
        styles.button,
        styles.button_shape_square,
        styles.lightning,
    );
    const bellButtonClasses = classNames(styles.button, styles.button_shape_square, styles.bell, {
        [styles.bell_active]: hasNotifications,
    });
    const walletButtonClasses = classNames(styles.button, styles.walletButton);
    const avatarClasses = classNames(styles.button, styles.avatar);

    return (
        <header className={styles.Header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <Logo
                            isLink
                            className={styles.mainLink}
                        />

                        <div className={styles.dropDownTrigger}>
                            Exchange <ArrowDown className={styles.dropDownArrow} />
                        </div>
                    </div>

                    {isAuth ? (
                        <div className={styles.right}>
                            <button className={lightningButtonClasses}>
                                <Lightning />
                            </button>

                            <button className={bellButtonClasses}>
                                <Bell />
                            </button>

                            <UiButton
                                color="dark"
                                clickHandler={goToWallet}
                                className={walletButtonClasses}
                            >
                                Wallet
                            </UiButton>

                            <Link
                                to="/settings"
                                className={avatarClasses}
                            >
                                {avatar && (
                                    <img
                                        src={avatar}
                                        alt="Avatar"
                                    />
                                )}
                            </Link>
                        </div>
                    ) : (
                        <div className={styles.right}>
                            <div className={styles.buttons}>
                                <UiButton
                                    color="blue"
                                    tag="router-link"
                                    href="/auth?mode=signup"
                                >
                                    Sign up
                                </UiButton>

                                <UiButton
                                    color="dark"
                                    tag="router-link"
                                    href="/auth?mode=signin"
                                >
                                    Login
                                </UiButton>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
