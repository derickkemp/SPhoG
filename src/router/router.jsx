import { createBrowserRouter } from "react-router-dom";

import About from "./routes/About/About";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import Gallery from "./routes/Gallery/Gallery";
import Root from "./routes/Root/Root";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Gallery />,
        index: true,
      },
    ],
    element: <Root />,
    errorElement: <ErrorPage />,
    path: "/",
  },
]);

export default router;
