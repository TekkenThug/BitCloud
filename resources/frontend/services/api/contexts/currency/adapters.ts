import { Currency, QuotatedCurrency } from "./types";

export const numbersAdapter = (arr: Currency[]) =>
    arr.map((item, index) => ({ ...item, number: index + 1 }));
export const chartsAdapter = (arr: Currency[]): QuotatedCurrency[] => {
    return arr.map((item) => {
        return {
            ...item,
            quote: item.quote.map((innerItem) => ({
                x: innerItem.date,
                y: innerItem.value,
            })),
        };
    });
};
