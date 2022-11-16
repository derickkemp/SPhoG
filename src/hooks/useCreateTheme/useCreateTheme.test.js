import { renderHook } from "@testing-library/react";

import createMatchMedia from "../../utils/test/createMatchMedia";

import useCreateTheme from "./useCreateTheme";

describe("useCreateTheme Hook", () => {
  it("Should return small margin on a small screen", () => {
    // Set up screen size for this test
    window.matchMedia = createMatchMedia(599);
    const { result } = renderHook(() => useCreateTheme());

    expect(result.current.spacing(1)).toBe("8px");
  });

  it("Should return medium margin on a medium screen", () => {
    // Set up screen size for this test
    window.matchMedia = createMatchMedia(600);
    const { result } = renderHook(() => useCreateTheme());

    expect(result.current.spacing(1)).toBe("12px");
  });

  it("Should return large margin on a large screen", () => {
    // Set up screen size for this test
    window.matchMedia = createMatchMedia(880);
    const { result } = renderHook(() => useCreateTheme());

    expect(result.current.spacing(1)).toBe("32px");
  });
});
