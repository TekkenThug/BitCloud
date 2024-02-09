import { api } from "@/services/api";
import { chartsAdapter, numbersAdapter } from "@/services/api/contexts/currency/adapters.ts";

import { Currency } from "./types";

const REQUEST_URL = "/currencies";

export const getTrendingCurrencies = async (limit?: number) => {
    const { data } = await api.get<Currency[]>(REQUEST_URL, {
        params: {
            limit,
        },
    });

    return chartsAdapter(numbersAdapter(data));
};
