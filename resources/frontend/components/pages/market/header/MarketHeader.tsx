import MarketWidget from "@/components/pages/market/widget/MarketWidget.tsx";

import styles from "./MarketHeader.module.scss";

import image from "@/assets/images/common/become-2.png";
import cursor from "@/assets/images/market/header/cursor.png";
import elementOne from "@/assets/images/market/header/element-1.png";
import elementTwo from "@/assets/images/market/header/element-2.png";
import elementThree from "@/assets/images/market/header/element-3.png";
import elementFour from "@/assets/images/market/header/element-4.png";
import elementFive from "@/assets/images/market/header/element-5.png";

const MarketHeader = () => {
    const text = "Today’s Cryptocurrency prices";
    const caption = "The global crypto market cap is";
    const cryptoMarketCup = "$1.86T";

    return (
        <section className={ styles.MarketHeader }>
            <div className="container">
                <div className={ styles.wrapper }>
                    <div className={ styles.content }>
                        <h1 className={ styles.title }>
                            { text }
                        </h1>

                        <p className={ styles.caption }>
                            { caption } <b>{ cryptoMarketCup }</b>
                        </p>
                    </div>

                    <div className={ styles.imagePlaceholder }>
                        <img src={ image } alt="Market Placeholder" />

                        <img
                            className={ `${styles.imageDecorator} ${styles.cursor}` }
                            src={ cursor }
                            alt="Cursor"
                        />

                        <img
                            className={ `${styles.imageDecorator} ${styles.elementOne}` }
                            src={ elementOne }
                            alt="Element one"
                        />

                        <img
                            className={ `${styles.imageDecorator} ${styles.elementTwo}` }
                            src={ elementTwo }
                            alt="Element two"
                        />

                        <img
                            className={ `${styles.imageDecorator} ${styles.elementThree}` }
                            src={ elementThree }
                            alt="Element three"
                        />

                        <img
                            className={ `${styles.imageDecorator} ${styles.elementFour}` }
                            src={ elementFour }
                            alt="Element four"
                        />

                        <img
                            className={ `${styles.imageDecorator} ${styles.elementFive}` }
                            src={ elementFive }
                            alt="Element five"
                        />
                    </div>
                </div>
            </div>

            <div className={ `${styles.widget} container` }>
                <MarketWidget />
            </div>
        </section>
    );
};

export default MarketHeader;
