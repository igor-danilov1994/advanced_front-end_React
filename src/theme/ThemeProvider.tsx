import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./ThemeContext";
import { FC, useMemo, useState } from "react";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.DARK;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme);

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
