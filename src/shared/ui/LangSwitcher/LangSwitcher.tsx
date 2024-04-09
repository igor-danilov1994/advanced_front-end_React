import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className }) => {
  const { t, i18n } = useTranslation();
  const lung = i18n.language === "ru" ? "en" : "ru";

  const toggle = async () => {
    i18n.changeLanguage(lung);
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t("Язык")}
    </Button>
  );
});
