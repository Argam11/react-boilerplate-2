import { Box } from "@mui/material";

export const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 64px)",
        textAlign: "center",
      }}
    >
      <h1>Page Not Found</h1>
    </Box>
  );
};
