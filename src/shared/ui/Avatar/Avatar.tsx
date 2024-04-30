import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: AvatarSize;
  isRound?: boolean;
}

export enum AvatarSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export const Avatar: FC<AvatarProps> = memo((props) => {
    const { t } = useTranslation();
    const {
        className, src, size = AvatarSize.L, isRound,
    } = props;

    const mods: Mods = {
        [cls[size]]: size,
        [cls.round]: isRound,
    };

    return (
        <img
            src={src}
            className={classNames(cls.avatar, mods, [className])}
            alt="avatar"
        />
    );
});
