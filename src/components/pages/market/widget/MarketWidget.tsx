import { useState } from "react";

import MarketWidgetCard from "./card/MarketWidgetCard";
import MarketWidgetNavButton from "./nav-button/MarketWidgetNavButton";

import styles from "./MarketWidget.module.scss";

const MarketWidget = () => {
	const cryptoCards = [1, 2, 3];
	const subNavItems = [
		"Cryptocurrencies",
		"DeFi",
		"Innovation",
		"POS",
		"NFT",
		"POW"
	];

	const [activeNav, setActiveNav] = useState(subNavItems[0]);
	
	return (
		<div className={styles.MarketWidget}>
			<div className={styles.top}>
				{
					cryptoCards.map(card => (
						<MarketWidgetCard
							key={card}
							name="BTC/USDT"
							percentage={0.79}
							value="36,641.20"
							secondValue="36,641.20"
							className={styles.cryptoCard}
						/>
					))
				}
			</div>

			<div className={styles.bottom}>
				<div>
					{
						subNavItems.map(button => (
							<MarketWidgetNavButton
								key={button}
								text={button}
								isActive={button === activeNav}
								changeHandler={setActiveNav}
								className={styles.navItem}
							/>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default MarketWidget;
