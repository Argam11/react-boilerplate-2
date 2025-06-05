import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CircularProgress, CssBaseline, Box, Divider } from "@mui/material";
import { Header } from "@components/Header";
import { ThemeMode } from "@/types/main";
import { getInitialTheme } from "@helpers/getInitialTheme";
import { Router } from "./router";
import "./App.css";

function App() {
  const initialTheme = getInitialTheme();
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.Light);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === ThemeMode.Light ? "#ffffff" : "#242424",
      },
    },
  });

  const toggleTheme = () => {
    const newMode = mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;

    setMode(newMode);
    document.documentElement.setAttribute("data-theme", newMode);
    localStorage.setItem("theme-mode", newMode);
  };

  useEffect(() => {
    if (initialTheme) {
      setIsThemeLoaded(true);
      setMode(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, [initialTheme]);

  if (!isThemeLoaded) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingTop: "60px" }}>
        <Header mode={mode} toggleTheme={toggleTheme} />
        <Router />
      </Box>
    </ThemeProvider>
  );
}

export default App;
