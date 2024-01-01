import { FC } from "react";

import UiButton from "@/components/ui/button/UiButton";
import UiTab from "@/components/ui/tab/UiTab";

import styles from "./HomeSectionHeader.module.scss";

interface Props {
    title: string;
    link: string;
    tabs: string[];
    activeTab: number | string;
    onChange: (tab: string) => void;
}

const HomeSectionHeader: FC<Props> = (
    {
        title,
        link,
        tabs,
        activeTab,
        onChange,
    }
) => {
    return (
        <div className={styles.HomeSectionHeader}>
            <div>
                <h2 className={styles.title}>
                    {title}
                </h2>

                <ul className={styles.tabList}>
                    {tabs.map(tab =>
                        <li key={tab}>
                            <UiTab
                                isActive={tab === activeTab}
                                text={tab}
                                changeHandler={() => onChange(tab)}
                            />
                        </li>
                    )}
                </ul>
            </div>

            <UiButton
                color="dark"
                tag="a"
                href={link}
            >
                View more
            </UiButton>
        </div>
    );
};

export default HomeSectionHeader;