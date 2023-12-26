import { Currency } from "./types";

export const numbersAdapter = (arr: Currency[]) =>  arr.map((item, index) => ({ ...item, number: index + 1 }));
