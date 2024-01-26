import { FC, useState } from "react";

import { cryptoOptions } from "@/data/mocks.ts";

import UiButton from "@/components/ui/button/UiButton";
import UiSelect from "@/components/ui/select/UiSelect.tsx";
import UiTab from "@/components/ui/tab/UiTab";

import styles from "./HomeSectionHeader.module.scss";

interface Props {
    title: string;
    link: string;
    tabs: string[];
    activeTab: number | string;
    onChange: (tab: string) => void;
    isMarket?: boolean;
}

const HomeSectionHeader: FC<Props> = (
    {
        title,
        link,
        tabs,
        activeTab,
        onChange,
        isMarket = false,
    }
) => {
    type SelectOptionType = { label: string, value: string };
    const [
        activeNav,
        setActiveNav
    ] = useState<SelectOptionType>(cryptoOptions[0]);

    return (
        <div className={`${styles.HomeSectionHeader} ${isMarket ? styles["HomeSectionHeader--is-market"] : ""}`}>
            <div className={styles.content}>
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

                { isMarket &&
                    <UiSelect
                        className={styles.select}
                        value={activeNav}
                        options={cryptoOptions}
                        onChange={setActiveNav}
                    />
                }
            </div>

            <UiButton
                color="dark"
                tag="a"
                href={link}
                className={styles.linkButton}
            >
                View more
            </UiButton>
        </div>
    );
};

export default HomeSectionHeader;
