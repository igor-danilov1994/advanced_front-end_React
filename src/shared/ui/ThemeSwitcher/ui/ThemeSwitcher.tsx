import { FC, memo } from 'react';

import { Themes, useTheme } from 'app/provider/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import ThemeDark from '../assets/themeDark.svg';
import ThemeLight from '../assets/themeLight.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
            {theme === Themes.LIGHT ? <ThemeLight /> : <ThemeDark />}
        </Button>
    );
});
