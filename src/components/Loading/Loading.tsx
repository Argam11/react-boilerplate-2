import { Box, CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: (theme) => theme.palette.background.default,
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
};
