import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum ThemeText {
  NORMAL = 'normal',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum SizeText {
  SizeM = 'size_m',
  SizeL = 'size_L',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  size?: SizeText;
  theme?: ThemeText;
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        size = SizeText.SizeM,
        theme = ThemeText.NORMAL,
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
