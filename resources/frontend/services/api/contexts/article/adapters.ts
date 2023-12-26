import { format } from "date-fns";

import { Article } from "./types";

export const dateAdapter = (data: Article[]) => {
    return data.map((item: Article) => (
        { ...item, date: format(new Date(item.date), "LLL dd, yyyy") }
    ));
};
