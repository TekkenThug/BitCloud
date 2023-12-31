import React from "react";

import UiLabel, { LabelColor } from "@/components/ui/label/UiLabel.tsx";

import styles from "./MarketBlogItem.module.scss";

import defaultCover from "@/assets/images/common/video-cover.png";

export interface BlogItem {
    cover?: string,
    title: string,
    author: string,
    date: string,
    tag?: string
}

const COLORS: { [key: string]: LabelColor } = {
    Featured: "red",
    New: "blue"
};

const MarketBlogItem: React.FC<BlogItem & { className: string }> = (
    {
        title,
        author,
        tag,
        date,
        cover,
        className
    }) => {
    return (
        <li className={`${styles.MarketBlogItem} ${className}`}>
            <div className={styles.cover}>
                <img src={cover ?? defaultCover} alt="Video preview" />
            </div>

            <div className={styles.middle}>
                {
                    tag &&
                    <div className={styles.tagList}>
                        <UiLabel
                            title={tag}
                            color={COLORS[tag]}
                        />
                    </div>
                }

                <h4 className={styles.title}>
                    {title}
                </h4>
            </div>

            <div className={styles.bottom}>
                <div className={styles.bottomAuthor}>
                    <div className={styles.bottomAuthorAvatar}></div>

                    <span>{author}</span>
                </div>

                <div>
                    {date}
                </div>
            </div>
        </li>
    );
};

export default MarketBlogItem;
