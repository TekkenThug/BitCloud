import { FC, FormEvent } from "react";
import classNames from "classnames";

import styles from "./ImageUploader.module.scss";

import Image from "@/assets/icons/design/image.svg?react";

interface Props {
    accept?: string;
    className?: string;
    title?: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
}

const ImageUploader: FC<Props> = ({
    onChange,
    title = "",
    className = "",
    accept = "images/*",
}) => {
    const classes = classNames(styles.ImageUploader, className);

    return (
        <div className={classes}>
            <input
                type="file"
                onChange={onChange}
                className={styles.nativeInput}
                accept={accept}
                title={title}
            />

            <div className={styles.cover}>
                <Image className={styles.coverIcon} />
                Upload image
            </div>
        </div>
    );
};

export default ImageUploader;
