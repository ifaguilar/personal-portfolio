import { useState } from "react";

export type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>();

  return {
    theme,
    setTheme,
  };
}
