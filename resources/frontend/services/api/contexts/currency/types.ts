export interface Currency {
    id: number;
    number: number;
    name: string;
    shortName: string;
    price: number;
    percentageForDay: number;
    percentageForWeek: number;
    marketCap: number;
    volume: number;
    icon: string;
    quote: { date: string; value: number }[];
}

export interface QuotatedCurrency extends Omit<Currency, "quote"> {
    quote: { x: string; y: number }[];
}
