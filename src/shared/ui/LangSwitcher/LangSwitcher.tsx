import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(() => {
    const { t, i18n } = useTranslation();
    const lung = i18n.language === 'ru' ? 'en' : 'ru';

    const toggle = async () => {
        i18n.changeLanguage(lung);
    };

    return (
        <Button onClick={toggle} theme={ThemeButton.CLEAR}>
            {t('Язык')}
        </Button>
    );
});
