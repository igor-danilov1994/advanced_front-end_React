import React, { FormEvent, SelectHTMLAttributes, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './Select.module.scss';

type ExcludeSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'optional' | 'onChange'
>;

export type Option<T> = {
  value: T;
  content: string;
};

interface SelectProps<T> extends ExcludeSelectProps {
  className?: string;
  currentValue?: T;
  optional: Option<T>[];
  onChange?: (optional: T) => void;
  readonly?: boolean;
  label?: string;
}

export function Select<T extends string>(props: SelectProps<T>) {
    const { t } = useTranslation();
    const {
        readonly, className, label, optional, currentValue, onChange,
    } = props;

    const onChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
        onChange?.(e.currentTarget.value as T);
    };

    const optionals = useMemo(
        () => optional.map((option) => (
            <option value={option.value} key={option.value} className={cls.option}>
                {option.content}
            </option>
        )),
        [optional],
    );

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            <div className={cls.wrapper}>
                {label && <Text text={label} />}
                <select
                    disabled={readonly}
                    value={currentValue}
                    onChange={onChangeHandler}
                    className={cls.select}
                >
                    {optionals}
                </select>
            </div>
        </div>
    );
}
