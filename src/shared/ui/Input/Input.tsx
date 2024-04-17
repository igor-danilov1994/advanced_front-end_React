import { FC, InputHTMLAttributes, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputElementProps {
  className?: string;
  value: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className, onChange, value, ...otherProps
    } = props;

    const onChangeHelper = (value: string) => {
        onChange?.(value);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                value={value}
                onChange={(e) => onChangeHelper(e.target.value)}
                {...otherProps}
            />
        </div>
    );
});