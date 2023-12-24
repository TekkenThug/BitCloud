export interface Currency {
    id: number;
    number: number,
    name: string;
    shortName: string;
    price: number;
    percentageForDay: number;
    percentageForWeek: number;
    marketCap: number;
    volume: number;
    icon: string;
}
