import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Breadcrumb } from "@/types";

import styles from "./UiBreadcrumbs.module.scss";

import ArrowRight from "@/assets/icons/ui/arrow-right-simple.svg?react";

interface Props {
    list: Breadcrumb[];
}

const UiBreadcrumbs: FC<Props> = ({ list }) => {
    return (
        <ul className={styles.UiBreadcrumbs}>
            {list.map((item, index) => (
                <li
                    key={item.link}
                    className={classNames(styles.item, {
                        [styles.itemActive]: index === list.length - 1,
                    })}
                >
                    <Link to={item.link}>{item.text}</Link>

                    {index !== list.length - 1 && <ArrowRight className={styles.itemArrow} />}
                </li>
            ))}
        </ul>
    );
};

export default UiBreadcrumbs;
