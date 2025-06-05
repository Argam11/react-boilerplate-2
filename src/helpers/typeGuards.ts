import { ThemeMode } from "@/types/main";

export const isThemeMode = (value?: string | null): value is ThemeMode => {
  return value === ThemeMode.Light || value === ThemeMode.Dark;
};
