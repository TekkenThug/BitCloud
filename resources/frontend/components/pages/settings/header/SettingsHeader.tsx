import { FC } from "react";

import { Breadcrumb } from "@/types";

import UiBreadcrumbs from "@/components/ui/breadcrumbs/UiBreadcrumbs.tsx";

import styles from "./SettingsHeader.module.scss";

interface Props {
    title: string;
    breadcrumbs: Breadcrumb[];
}

const SettingsHeader: FC<Props> = ({ title, breadcrumbs }) => {
    return (
        <section className={styles.SettingsHeader}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{title}</h2>

                    <UiBreadcrumbs list={breadcrumbs} />
                </div>
            </div>
        </section>
    );
};

export default SettingsHeader;
