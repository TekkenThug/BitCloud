import { FC } from "react";

import styles from "./Address.module.scss";

import LockIcon from "@/assets/icons/ui/lock.svg?react";

const [protocol, host] = import.meta.env.VITE_APP_URL.split("://");

interface Props {
    address?: string
}

const Address: FC<Props> = ({ address = "/login" }) => {
    return (
        <div className={ styles.Address }>
            <LockIcon className={ styles.icon } />

            <span className={ styles.green }>{ protocol }://</span>{ host }{ address }
        </div>
    );
};

export default Address;
