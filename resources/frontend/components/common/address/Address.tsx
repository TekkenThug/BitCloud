import styles from "./Address.module.scss";

import LockIcon from "@/assets/icons/ui/lock.svg?react";

const Address = () => {
    return (
        <div className={styles.Address}>
            <LockIcon className={styles.icon} />
            <span className={styles.green}>https://</span>accounts.bitcloud.com/login
        </div>
    );
};

export default Address;
