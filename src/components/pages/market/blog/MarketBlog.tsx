import MarketBlogItem, { BlogItem } from "./item/MarketBlogItem";
import UiButton from "components/ui/button/UiButton";

import styles from "./MarketBlog.module.scss";
import { ReactComponent as Loading } from "assets/icons/controls/loading.svg";

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

	const handle = () => alert("hello");

	return (
		<section className={styles.MarketBlog}>
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
						blogList && blogList.map((item, index) => (
							<MarketBlogItem
								key={index}
								className={styles.blogItem}
								title={item.title}
								author={item.author}
								date={item.date}
								tags={item.tags}
							/>
						))
					}
				</ul>

				<UiButton
					className={styles.loadingButton}
					color="dark"
					clickHandler={handle}
				>
					<Loading className={styles.loadingButtonIcon} /> Load more
				</UiButton>
			</div>
		</section>
	);
};

export default MarketBlog;
