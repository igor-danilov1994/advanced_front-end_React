import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CardS.module.scss';

interface CardSProps {
    className?: string;
}

export const CardS: FC<CardSProps> = memo((props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.CardS, {}, [className])}>
            CardS
        </div>
    );
});
