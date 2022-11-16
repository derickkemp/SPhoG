import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { screen } from "@testing-library/react";

import ErrorPage from "./ErrorPage";

let router;

describe("Error Page", () => {
  beforeEach(() => {
    router = createMemoryRouter(
      [
        {
          path: "/",
          element: <h1>Home</h1>,
          errorElement: <ErrorPage />,
        },
      ],
      {
        // Set start history routes
        initialEntries: ["/some/invalid/path"],
        // Set the start page to the first page in the history
        initialIndex: 0,
      }
    );
  });

  it("Test that Error page displays for 404 errors", async () => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Oops!")).toBeInTheDocument();
  });
});
