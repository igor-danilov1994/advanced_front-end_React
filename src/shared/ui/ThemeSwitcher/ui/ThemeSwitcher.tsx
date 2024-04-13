import { FC, memo } from 'react';

import { Themes, useTheme } from 'app/provider/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import ThemeDark from 'shared/assets/themeDark.svg';
import ThemeLight from 'shared/assets/themeLight.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
            {theme === Themes.LIGHT ? <ThemeLight /> : <ThemeDark />}
        </Button>
    );
});
