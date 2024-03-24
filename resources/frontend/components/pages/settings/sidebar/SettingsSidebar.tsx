import { NavLink } from "react-router-dom";

import styles from "./SettingsSidebar.module.scss";

import Keyboard from "@/assets/icons/ce/keyboard.svg?react";
import Laptop from "@/assets/icons/ce/laptop.svg?react";
import User from "@/assets/icons/contacts/user.svg?react";
import Barcode from "@/assets/icons/ecommerce/barcode.svg?react";
import Lock from "@/assets/icons/ui/lock.svg?react";
import Share from "@/assets/icons/ui/shape-square.svg?react";

const SettingsSidebar = () => {
    return (
        <aside className={styles.SettingsSidebar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        to="/settings/profile"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        <User className={styles.itemIcon} />
                        <span>Profile</span>
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to="/settings/referrals"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        <Share className={styles.itemIcon} />
                        <span>Referrals</span>
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to="/settings/referrals"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        <Keyboard className={styles.itemIcon} />
                        <span>API keys</span>
                    </NavLink>
                </li>
            </ul>

            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        to="/settings/referrals"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        <Laptop className={styles.itemIcon} />
                        <span>Sessions & login history</span>
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to="/settings/referrals"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        <Barcode className={styles.itemIcon} />
                        <span>2FA</span>
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to="/settings/referrals"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        <Lock className={styles.itemIcon} />
                        <span>Change password</span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default SettingsSidebar;
