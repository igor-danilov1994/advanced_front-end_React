import { FC, memo, useMemo } from 'react';
import { ProfileSchema } from 'entities/Profile';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Text, ThemeText } from 'shared/ui/Text /Text';
import { Loader } from 'widgets/Loader/ui/Loader';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'shared/const/common';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  profile: ProfileSchema;
  onChangeFirstName?: (name: string) => void;
  onChangeLastName?: (lastName: string) => void;
  onChangeAge?: (age: string) => void;
  onChangeCity?: (str: string) => void;
  onChangeAvatar?: (str: string) => void;
  onChangCurrency?: (currency: Currency) => void;
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const { t } = useTranslation();
    const {
        className,
        profile,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangCurrency,
    } = props;
    const {
        form, isLoading, error, readonly,
    } = profile;

    const currencyList: Currency[] = useMemo(
        () => [Currency.EUR, Currency.RUB, Currency.USD],
        [],
    );

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
                    className,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Text theme={ThemeText.ERROR} text="error" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <Avatar src={form?.avatar} size={AvatarSize.M} className={cls.avatar} />
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваше имя')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={form?.first}
                    placeholder={t('Ваше имя')}
                    readonly={readonly}
                    onChange={onChangeFirstName}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваша фамилия')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={form?.lastname}
                    placeholder={t('Ваша фамилия')}
                    readonly={readonly}
                    onChange={onChangeLastName}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваш возраст')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={`${form?.age}`}
                    type="number"
                    placeholder={t('Ваш возраст')}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваш город')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={form?.city}
                    placeholder={t('Ваш город')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваш аватар')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={form?.avatar}
                    placeholder={t('Ваш аватар')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваша валюта')} />
                <Select<Currency>
                    optional={currencyList}
                    currentValue={form?.currency}
                    onChange={onChangCurrency}
                    readonly={readonly}
                />
            </div>
        </div>
    );
});
