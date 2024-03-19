import { describe, expect, test } from "vitest";

import { formatPercent, formatPrice } from "@/utils/numbers.ts";

describe("Numbers utils", () => {
    test("Get formatted price", () => {
        expect(formatPrice(24580.124)).toBe("24,580.12");
    });

    test("Get percent with plus", () => {
        expect(formatPercent(20)).toBe("+20%");
    });

    test("Get percent with minus", () => {
        expect(formatPercent(-20)).toBe("-20%");
    });

    test("Get percent with plus if value is zero", () => {
        expect(formatPercent(0)).toBe("+0%");
    });
});
