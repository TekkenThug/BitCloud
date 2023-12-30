import { api } from "@/services/api";
import { Currency } from "./types";
import { numbersAdapter, chartsAdapter } from "@/services/api/contexts/currency/adapters.ts";

const REQUEST_URL = "/currencies";

export const getTrendingCurrencies = async (limit?: number) => {
    const { data } = await api.get<Currency[]>(REQUEST_URL, {
        params: {
            limit
        }
    });

    return chartsAdapter(numbersAdapter(data));
};
