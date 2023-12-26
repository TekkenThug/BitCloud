import { api } from "@/services/api";

import { dateAdapter } from "./adapters";
import { Article } from "./types";
import { WithPagination } from "@/services/api/types";

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
