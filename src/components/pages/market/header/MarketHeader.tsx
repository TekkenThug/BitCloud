import styles from "./MarketHeader.module.scss";
import image from "assets/images/market/header.png";

const MarketHeader = () => {
	const text = "Today’s Cryptocurrency prices";
	const caption = "The global crypto market cap is";
	const cryptoMarketCup = "$1.86T";

	return (
		<div className={styles.MarketHeader}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h1 className={styles.title}>
							{ text }
						</h1>

						<p className={styles.caption}>
							{ caption } <b>{ cryptoMarketCup }</b>
						</p>
					</div>

					<div className={styles.imagePlaceholder}>
						<img src={image} alt="Market Placeholder" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MarketHeader;
