import styles from "./PageLoader.module.scss";

import Puff from "@/assets/icons/common/puff.svg?react";

const PageLoader = () => {
    return (
        <div className={ styles.PageLoader }>
            <Puff className={ styles.icon } />
        </div>
    );
};

export default PageLoader;
