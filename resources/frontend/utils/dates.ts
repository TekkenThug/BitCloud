import { format } from "date-fns";

export const toHumanizeDate = (rawDate: string) => format(new Date(rawDate), "LLL dd, yyyy");
