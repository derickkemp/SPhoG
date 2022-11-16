import Box from "@mui/material/Box";
import { useRouteError } from "react-router-dom";

import Md3Typography from "../../../components/md3/Md3Typography/Md3Typography";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box>
      <Md3Typography role="display">Oops!</Md3Typography>
      <Md3Typography role="body">
        Sorry, an unexpected error has occurred.
      </Md3Typography>
      <Md3Typography role="body">
        <i>{error.statusText || error.message}</i>
      </Md3Typography>
    </Box>
  );
}
