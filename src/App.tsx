import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading";
import { ThemeMode } from "@/types/main";
import { getInitialTheme } from "@helpers/getInitialTheme";
import { Router } from "./router";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

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
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ paddingTop: "60px" }}>
          <Header mode={mode} toggleTheme={toggleTheme} />
          <Router />
        </Box>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
