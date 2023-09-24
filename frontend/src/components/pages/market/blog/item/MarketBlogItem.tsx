import React from "react";

import UiLabel, { UiLabelProps } from "@/components/ui/label/UiLabel";

import defaultCover from "@/assets/images/common/video-cover.png";
import styles from "./MarketBlogItem.module.scss";

export interface BlogItem {
	cover?: string,
	title: string,
	author: string,
	date: string,
	tags: UiLabelProps[]
}

const MarketBlogItem: React.FC<BlogItem & { className: string }> = (
	{
		title,
		author,
		tags,
		date,
		cover,
		className
	}) => {
	return (
		<div className={`${styles.MarketBlogItem} ${className}`}>
			<div className={styles.cover}>
				<img src={cover ?? defaultCover} alt="Video preview" />
			</div>

			<div className={styles.middle}>
				{
					tags &&
					<div className={styles.tagList}>
						{
							tags.map((tag, index) => (
								<UiLabel
									key={index}
									title={tag.title}
									color={tag.color}
								/>
							))
						}
					</div>
				}

				<h4 className={styles.title}>
					{ title }
				</h4>
			</div>

			<div className={styles.bottom}>
				<div className={styles.bottomAuthor}>
					<div className={styles.bottomAuthorAvatar}></div>

					<span>{ author }</span>
				</div>

				<div>
					{ date }
				</div>
			</div>
		</div>
	);
};

export default MarketBlogItem;
