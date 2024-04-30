import React, { FormEvent, SelectHTMLAttributes, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

type ExcludeSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'optional' | 'onChange'
>;

interface SelectProps<T> extends ExcludeSelectProps {
  className?: string;
  currentValue?: T;
  optional: T[];
  onChange?: (optional: T) => void;
  readonly?: boolean;
}

export function Select<T extends string>(props: SelectProps<T>) {
    const { t } = useTranslation();
    const {
        readonly, className, optional, currentValue, onChange,
    } = props;

    const onChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
        onChange?.(e.currentTarget.value as T);
    };

    const optionals = useMemo(
        () => optional.map((option) => (
            <option value={option} key={option} className={cls.option}>
                {option}
            </option>
        )),
        [optional],
    );

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            <select
                disabled={readonly}
                value={currentValue}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {optionals}
            </select>
        </div>
    );
}
