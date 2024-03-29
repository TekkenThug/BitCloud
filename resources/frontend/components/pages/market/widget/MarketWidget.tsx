import { useState } from "react";

import { cryptoOptions } from "@/data/mocks.ts";

import UiButton from "@/components/ui/button/UiButton.tsx";
import UiSelect from "@/components/ui/select/UiSelect.tsx";
import UiTab from "@/components/ui/tab/UiTab.tsx";

import MarketWidgetCard from "./card/MarketWidgetCard.tsx";

import styles from "./MarketWidget.module.scss";

const MarketWidget = () => {
    type SelectOptionType = { label: string; value: string };
    const cryptoCards = [1, 2, 3];

    const [activeNav, setActiveNav] = useState<SelectOptionType>(cryptoOptions[0]);
    const selectHandler = (item: SelectOptionType | null) => {
        if (!item) return;

        setActiveNav(item);
    };

    const handleClickButton = (value: string) => {
        const newValue = cryptoOptions.find((item) => item.value === value);

        if (newValue) {
            setActiveNav(newValue);
        }
    };

    return (
        <div className={styles.MarketWidget}>
            <div className={styles.top}>
                {cryptoCards.map((card) => (
                    <MarketWidgetCard
                        key={card}
                        name="BTC/USDT"
                        percentage={0.79}
                        value="36,641.20"
                        secondValue="36,641.20"
                        className={styles.cryptoCard}
                    />
                ))}
            </div>

            <div className={styles.bottom}>
                <div className={styles.tabList}>
                    {cryptoOptions.map((button) => (
                        <UiTab
                            key={button.value}
                            text={button.label}
                            isActive={button.value === activeNav.value}
                            changeHandler={() => handleClickButton(button.value)}
                            className={styles.navItem}
                            theme="light"
                        />
                    ))}
                </div>

                <UiButton
                    className={styles.walletButton}
                    color="dark"
                    clickHandler={() => {}}
                >
                    Wallet
                </UiButton>

                <UiSelect<SelectOptionType>
                    className={styles.select}
                    value={activeNav}
                    options={cryptoOptions}
                    onChange={selectHandler}
                />
            </div>
        </div>
    );
};

export default MarketWidget;
