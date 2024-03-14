import { useState } from "react";
import { useRequest } from "ahooks";

import { Api } from "@/services/api";
import { Article } from "@/services/api/data-contracts.ts";
import { toHumanizeDate } from "@/utils/dates.ts";

import UiButton from "@/components/ui/button/UiButton";

import styles from "./MarketBlog.module.scss";

import Loading from "@/assets/icons/controls/loading.svg?react";

import MarketBlogItem from "./item/MarketBlogItem";

const MarketBlog = () => {
    const title = "Learn and earn";
    const subtitle =
        "Stacks is a production-ready library of stackable content blocks built in React Native.";

    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState<Article[]>([]);
    const { data, loading } = useRequest(() => Api.getArticles({ page, limit: 3 }), {
        refreshDeps: [page],
        onSuccess: ({ data }) => setArticles((old) => [...old, ...data]),
    });

    const loadMoreArticles = () => {
        if (!data || data.pagination?.last_page === page) return;

        setPage((page) => page + 1);
    };

    return (
        <section className={styles.MarketBlog}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>

                    <p className={styles.subtitle}>{subtitle}</p>
                </div>

                {Boolean(articles.length) && (
                    <ul className={styles.blogList}>
                        {articles.map((item) => (
                            <MarketBlogItem
                                key={item.id}
                                className={styles.blogItem}
                                title={item.title}
                                author={item.author}
                                date={toHumanizeDate(item.date)}
                                cover={item.cover_url}
                                tag={item.tag}
                            />
                        ))}
                    </ul>
                )}

                {data?.pagination?.last_page !== page && (
                    <UiButton
                        className={styles.loadingButton}
                        color="dark"
                        clickHandler={loadMoreArticles}
                        isLoading={loading}
                    >
                        <Loading className={styles.loadingButtonIcon} /> Load more
                    </UiButton>
                )}
            </div>
        </section>
    );
};

export default MarketBlog;
