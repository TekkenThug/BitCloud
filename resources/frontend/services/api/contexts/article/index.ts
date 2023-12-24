import { api } from "@/services/api";

import { dateAdapter } from "./adapters";
import { Article } from "./types";

const REQUEST_URL = "/articles";

export const getArticlesForMarketPage = async () => {
	const { data } = await api.get<Article[]>(REQUEST_URL, {
		transformResponse: dateAdapter
	});

	return data;
};
