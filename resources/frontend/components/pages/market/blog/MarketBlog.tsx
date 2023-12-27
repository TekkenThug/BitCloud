import { useEffect, useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { getArticlesForMarketPage } from "@/services/api/contexts/article";

import MarketBlogItem from "./item/MarketBlogItem.tsx";
import UiButton from "@/components/ui/button/UiButton.tsx";

import styles from "./MarketBlog.module.scss";
import Loading from "@/assets/icons/controls/loading.svg?react";

const MarketBlog = () => {
    const title = "Learn and earn";
    const subtitle = "Stacks is a production-ready library of stackable content blocks built in React Native.";

    const [enabled, setEnabled] = useState(true);
    useEffect(() => {
        setEnabled(false);
    }, []);

    const [
        page,
        setPage
    ] = useState<number>(1);
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["blogArticles", page],
        queryFn: () => getArticlesForMarketPage(page),
        enabled: enabled,
    });

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        if (!data || !data.articles.length) return;

        console.log(data.articles);

        setArticles(value => [...value, ...data.articles]);
    }, [data]);

    const loadMoreArticles = () => {
        if (!data || data.pagination.lastPage === page) return;

        setPage((page) => page + 1);
        refetch();
    };

    return (
        <section className={styles.MarketBlog}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>

                    <p className={styles.subtitle}>
                        {subtitle}
                    </p>
                </div>

                {
                    !isLoading &&
                    <ul className={styles.blogList}>
                        {
                            data && articles.map((item, index) => (
                                <MarketBlogItem
                                    key={index}
                                    className={styles.blogItem}
                                    title={item.title}
                                    author={item.author}
                                    date={item.date}
                                    cover={item.coverUrl}
                                    tag={item.tag}
                                />
                            ))
                        }
                    </ul>
                }

                {
                    data?.pagination.lastPage !== page &&
                    <UiButton
                        className={styles.loadingButton}
                        color="dark"
                        clickHandler={loadMoreArticles}
                        disabled={isLoading}
                    >
                        <Loading className={`${styles.loadingButtonIcon} ${isLoading && "spin-animation"}`}/> Load more
                    </UiButton>
                }
            </div>
        </section>
    );
};

export default MarketBlog;
