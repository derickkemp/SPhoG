import Box from "@mui/material/Box";
// import { useNavigate } from "react-router-dom";

import Md3Typography from "../../../components/md3/Md3Typography/Md3Typography";

export default function About() {
  // const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: 1,
        }}
      >
        <Md3Typography role="display">SPhoG</Md3Typography>
        <Md3Typography role="body">
          {process.env.REACT_APP_VERSION}
        </Md3Typography>
        <Md3Typography role="body">
          <a href="https://github.com/derickkemp/SPhoG">
            https://github.com/derickkemp/SPhoG
          </a>
        </Md3Typography>
      </Box>
    </Box>
  );
}
