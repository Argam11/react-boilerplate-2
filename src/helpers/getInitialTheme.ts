import { ThemeMode } from "@/types/main";
import { isThemeMode } from "./typeGuards";

export const getInitialTheme = () => {
  const themeMode = localStorage.getItem("theme-mode");

  if (
    isThemeMode(themeMode) &&
    (themeMode === ThemeMode.Light || themeMode === ThemeMode.Dark)
  ) {
    return themeMode;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ThemeMode.Dark
    : ThemeMode.Light;
};
