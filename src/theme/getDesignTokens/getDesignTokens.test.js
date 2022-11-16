import getDesignTokens from "./getDesignTokens";

describe("Get Design Tokens", () => {
  test("Getting default design tokens returns light theme", () => {
    const designTokens = getDesignTokens();
    expect(designTokens.palette.mode).toBe("light");
  });

  test("Getting dark design tokens returns dark theme", () => {
    const designTokens = getDesignTokens("dark");
    expect(designTokens.palette.mode).toBe("dark");
  });

  test("Getting light design tokens returns light theme", () => {
    const designTokens = getDesignTokens("light");
    expect(designTokens.palette.mode).toBe("light");
  });
});
