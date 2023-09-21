import MarketBlogItem, { BlogItem } from "./item/MarketBlogItem";

import styles from "./MarketBlog.module.scss";

const MarketBlog = () => {
	const title = "Learn and earn";
	const subtitle = "Stacks is a production-ready library of stackable content blocks built in React Native.";
	const blogList: BlogItem[] = [
		{
			title: "Learn about UI8 coin and earn an All-Access Pass",
			author: "Floyd Buckridge",
			date: "Feb 03, 2021",
			tags: [
				{
					title: "New",
					color: "red"
				}
			]
		},
		{
			title: "Submit your watchlist and win USDT",
			author: "Floyd Buckridge",
			date: "Feb 03, 2021",
			tags: [
				{
					title: "Featured",
					color: "blue"
				}
			]
		},
		{
			title: "Submit your",
			author: "Floyd Buckridge",
			date: "Feb 03, 2021",
			tags: [
				{
					title: "Featured",
					color: "blue"
				}
			]
		},
	];

	return (
		<div className={styles.MarketBlog}>
			<div className="container">
				<div className={styles.content}>
					<h2 className={styles.title}>
						{ title }
					</h2>

					<p className={styles.subtitle}>
						{ subtitle }
					</p>
				</div>

				<ul className={styles.blogList}>
					{
						blogList && blogList.map(item => (
							<MarketBlogItem
								className={styles.blogItem}
								title={item.title}
								author={item.author}
								date={item.date}
								tags={item.tags}
							/>
						))
					}
				</ul>
			</div>
		</div>
	);
};

export default MarketBlog;
