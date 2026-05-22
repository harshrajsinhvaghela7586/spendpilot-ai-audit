import { describe, it, expect } from "vitest";
import { generateAudit } from "../lib/audit-engine";

describe("Audit Engine", () => {

  it("optimizes ChatGPT plans", () => {

    const result = generateAudit(
      "ChatGPT",
      120,
      2
    );

    expect(result.savings).toBeDefined();
  });

  it("optimizes Claude plans", () => {

    const result = generateAudit(
      "Claude",
      150,
      2
    );

    expect(result.recommendation).toContain("Claude");
  });

  it("optimizes Cursor plans", () => {

    const result = generateAudit(
      "Cursor",
      200,
      3
    );

    expect(result.optimizedPlan).toBeDefined();
  });

  it("optimizes Copilot plans", () => {

    const result = generateAudit(
      "Copilot",
      80,
      5
    );

    expect(result.savings).toBeDefined();
  });

  it("optimizes Gemini plans", () => {

    const result = generateAudit(
      "Gemini",
      90,
      2
    );

    expect(result.recommendation).toBeDefined();
  });

});
