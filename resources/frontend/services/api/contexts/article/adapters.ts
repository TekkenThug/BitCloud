import { format } from "date-fns";

import { Article } from "./types";

export const dateAdapter = (json: string) => {
	const data: Article[] = JSON.parse(json);

	return data.map((item: Article) => (
		{ ...item, date: format(new Date(item.date), "LLL dd, yyyy") }
	));
};
