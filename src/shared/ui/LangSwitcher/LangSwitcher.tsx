import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
    ({ className, short }) => {
        const { t, i18n } = useTranslation();
        const lung = i18n.language === 'ru' ? 'en' : 'ru';

        const toggle = async () => {
            i18n.changeLanguage(lung);
        };

        return (
            <Button onClick={toggle} className={className} theme={ButtonTheme.CLEAR}>
                {t(short ? 'Сокращение Языка' : 'Язык')}
            </Button>
        );
    },
);
