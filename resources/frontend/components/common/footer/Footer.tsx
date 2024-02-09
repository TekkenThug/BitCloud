import { useRef, useState } from "react";
import { animated } from "@react-spring/web";
import classNames from "classnames";

import useDropdownMenu from "@/hooks/useDropdownMenu.ts";
import { subscribeToNewsletter } from "@/services/api/contexts/subscribe";
import { ErrorMessage } from "@/services/api/types";

import UiInputConfirm from "@/components/ui/input/input-confirm/UiInputConfirm";

import styles from "./Footer.module.scss";

import Logo from "@/assets/icons/common/logo.svg?react";
import ArrowDownSimple from "@/assets/icons/ui/arrow-down-simple.svg?react";

const Footer = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const subscribe = async (email: string) => {
        setLoading(true);
        setError("");

        try {
            await subscribeToNewsletter(email);

            setSuccess(true);
        } catch (e) {
            setError((e as ErrorMessage).message);
        } finally {
            setLoading(false);
        }
    };

    const list = useRef<HTMLUListElement>(null);
    const { isVisible, toggleVisibility, slideDownAnimation } = useDropdownMenu(list, {
        paddingTop: [20, 0],
    });

    const links = [
        {
            title: "About",
            link: "/",
        },
        {
            title: "Projects",
            link: "/",
        },
        {
            title: "What We Do",
            link: "/",
        },
        {
            title: "Press",
            link: "/",
        },
        {
            title: "Jobs",
            link: "/",
        },
    ];

    const arrowClasses = classNames(styles.navArrowIcon, {
        [styles.navArrowIcon_rotated]: isVisible,
    });
    const linkListClasses = classNames(styles.navList, styles.navList_desktop);
    const linkListMobileClasses = classNames(styles.navList, styles.navList_mobile);

    return (
        <footer className={styles.Footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.col}>
                        <a
                            href="/"
                            className={styles.siteLink}
                        >
                            <Logo className={styles.logo} />{" "}
                            <span className={styles.siteName}>BitCloud</span>
                        </a>

                        <button
                            className={styles.navToggle}
                            onClick={() => toggleVisibility(!isVisible)}
                        >
                            Navigation
                            <ArrowDownSimple className={arrowClasses} />
                        </button>

                        <ul
                            ref={list}
                            className={linkListClasses}
                        >
                            {links.map((item) => (
                                <li
                                    key={item.title}
                                    className={styles.navItem}
                                >
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))}
                        </ul>

                        <animated.ul
                            style={slideDownAnimation}
                            className={linkListMobileClasses}
                        >
                            {links.map((item) => (
                                <li
                                    key={item.title}
                                    className={styles.navItem}
                                >
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))}
                        </animated.ul>
                    </div>

                    <div className={styles.col}>
                        <h5 className={styles.colHeading}>Contacts</h5>

                        <p className={styles.contactList}>
                            <span>43252 Borer Mountains</span>

                            <span>Zackerychester</span>

                            <span>Bahamas</span>

                            <a href="tel:732-528-4945">732-528-4945</a>
                        </p>
                    </div>

                    <div className={styles.col}>
                        <h5 className={styles.colHeading}>Newsletter</h5>

                        <div className={styles.subscribe}>
                            <p className={styles.subscribeText}>
                                Subscribe our newsletter to get more free design course and resource
                            </p>

                            <UiInputConfirm
                                placeholder="E-mail"
                                submitHandle={subscribe}
                                inputHandle={() => setError("")}
                                isLoading={loading}
                                isSuccess={success}
                                isError={Boolean(error)}
                                errorText={error}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p className={styles.copyright}>
                        Copyright © 2024 Vadim Ignatov Inc. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
