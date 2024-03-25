import { Currency } from "@/services/api/data-contracts.ts";

export interface Breadcrumb {
    link: string;
    text: string;
}

export interface QuotatedCurrency extends Omit<Currency, "quote"> {
    quote: { x: string; y: number }[];
    number: number;
}
