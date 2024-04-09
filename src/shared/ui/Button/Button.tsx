import { ButtonHTMLAttributes, FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = memo((props) => {
    const { t } = useTranslation();
    const {
        className, onClick, theme, children, ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
});
