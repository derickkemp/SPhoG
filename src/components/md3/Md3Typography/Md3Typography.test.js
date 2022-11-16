import { render, screen } from "@testing-library/react";

import Md3Typography from "./Md3Typography";

describe("Md3Typography Component", () => {
  it("Rendering a message shoud display on the screen", () => {
    render(<Md3Typography role="display">HELLO WORLD!</Md3Typography>);
    expect(screen.getByText("HELLO WORLD!")).toBeInTheDocument();
  });
});
