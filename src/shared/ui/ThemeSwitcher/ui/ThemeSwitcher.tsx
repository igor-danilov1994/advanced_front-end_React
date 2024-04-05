import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Themes, useTheme } from "app/provider/ThemeProvider";
import ThemeDark from "../assets/themeDark.svg";
import ThemeLight from "../assets/themeLight.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Themes.LIGHT ? <ThemeLight /> : <ThemeDark />}
    </Button>
  );
});
