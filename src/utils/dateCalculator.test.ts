import { describe, expect, it } from "vitest";
import { calculateElapsedDays } from "./dateCalculator";

describe("calculateElapsedDays", () => {
  it("calculates the relationship's fixed first-date-to-ending interval", () => {
    expect(calculateElapsedDays("2025-01-19", "2026-11-02")).toBe(652);
  });

  it("uses elapsed rather than inclusive calendar days", () => {
    expect(calculateElapsedDays("2024-02-28", "2024-03-01")).toBe(2);
  });

  it("handles four-digit years below 0100 without Date.UTC year coercion", () => {
    expect(calculateElapsedDays("0099-01-01", "0100-01-01")).toBe(365);
  });

  it("rejects malformed or impossible calendar dates", () => {
    expect(() => calculateElapsedDays("2025-02-30", "2025-03-01")).toThrow(RangeError);
    expect(() => calculateElapsedDays("01/19/2025", "2025-11-02")).toThrow(RangeError);
  });
});
