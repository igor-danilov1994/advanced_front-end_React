import { FC, memo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

export enum AvatarSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface AvatarProps {
  className?: string;
  src?: string;
  size?: AvatarSize;
  isRound?: boolean;
}

export const Avatar: FC<AvatarProps> = memo((props) => {
    const {
        className, src, size = AvatarSize.L, isRound,
    } = props;

    const mods: Mods = {
        [cls[size]]: size,
        [cls.round]: isRound,
    };

    const defaultUserImg = 'https://www.truckeradvisor.com/media/uploads/profilePics/notFound.jpg';

    return (
        <img
            src={src ?? defaultUserImg}
            className={classNames(cls.avatar, mods, [className])}
            alt="avatar"
        />
    );
});
