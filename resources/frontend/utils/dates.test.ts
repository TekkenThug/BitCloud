import { describe, expect, test } from "vitest";

import { toHumanizeDate } from "@/utils/dates.ts";

describe("Dates utils", () => {
    test("Get humanize date", () => {
        expect(toHumanizeDate("2023-09-20T00:00:00.000000Z")).toBe("Sep 20, 2023");
    });
});
