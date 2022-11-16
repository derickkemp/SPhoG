import { renderHook } from "@testing-library/react";

import createMatchMedia from "../../utils/test/createMatchMedia";

import useMediaSize, { mediaSizes } from "./useMediaSize";

describe("useMediaSize Hook", () => {
  it("Should return small on a small screen", () => {
    // Set up screen size for this test
    window.matchMedia = createMatchMedia(599);
    const { result } = renderHook(() => useMediaSize());

    expect(result.current).toBe(mediaSizes.SMALL);
  });

  it("Should return medium on a small screen", () => {
    // Set up screen size for this test
    window.matchMedia = createMatchMedia(600);
    const { result } = renderHook(() => useMediaSize());

    expect(result.current).toBe(mediaSizes.MEDIUM);
  });

  it("Should return large on a large screen", () => {
    // Set up screen size for this test
    window.matchMedia = createMatchMedia(880);
    const { result } = renderHook(() => useMediaSize());

    expect(result.current).toBe(mediaSizes.LARGE);
  });
});
