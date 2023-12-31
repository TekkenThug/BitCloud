import { api } from "@/services/api";
import { WithPagination } from "@/services/api/types";

import { dateAdapter } from "./adapters";
import { Article } from "./types";

const REQUEST_URL = "/articles";

export const getArticlesForMarketPage = async (page?: number) => {
    const { data } = await api.get<WithPagination<Article[]>>(REQUEST_URL, {
        params: {
            limit: 3,
            page,
        },
    });

    return { articles: dateAdapter(data.data), pagination: data.pagination };
};
