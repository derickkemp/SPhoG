import { screen } from "@testing-library/react";

import renderWithRouter from "../../../utils/test/renderWithRouter";

import About from "./About";

describe("About Page", () => {
  it("Rendering the About page should contain its elements", () => {
    renderWithRouter(<About />);
    expect(screen.getByText("Attributions")).toBeInTheDocument();
  });
});
