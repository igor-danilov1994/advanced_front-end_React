import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemeContext';

interface UseThemeResponse {
  toggleTheme?: () => void;
  theme: Themes;
}

export const useTheme = (): UseThemeResponse => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Themes;

        switch (theme) {
        case Themes.DARK:
            newTheme = Themes.LIGHT;
            break;
        case Themes.LIGHT:
            newTheme = Themes.ORANGE;
            break;
        case Themes.ORANGE:
            newTheme = Themes.DARK;
            break;

        default:
            newTheme = Themes.DARK;
        }

        setTheme?.(newTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme ?? Themes.DARK,
        toggleTheme,
    };
};
