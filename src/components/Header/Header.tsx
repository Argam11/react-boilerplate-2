import { Box, IconButton, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeMode } from "@/types/main";

interface HeaderProps {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const Header = ({ mode, toggleTheme }: HeaderProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "20px",
        position: "sticky",
        left: 0,
        top: 0,
        backgroundColor: (theme) => theme.palette.background.paper,
        zIndex: "9999",
        maxWidth: "1280px",
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
        }}
      >
        Movie app
      </Typography>
      <IconButton
        sx={{
          height: "40px",
        }}
        color="inherit"
        aria-label="toggle theme"
        onClick={toggleTheme}
      >
        {mode === ThemeMode.Light ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};
