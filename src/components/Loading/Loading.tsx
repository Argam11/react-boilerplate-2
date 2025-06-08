import { Box, CircularProgress } from "@mui/material";

interface LoadingProps {
  mode?: "full" | "inline";
}

export const Loading = ({ mode = "full" }: LoadingProps) => {
  return (
    <Box
      data-testid="loading"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.background.paper,
        ...(mode === "full" && {
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 9999,
        }),
      }}
    >
      <CircularProgress />
    </Box>
  );
};
