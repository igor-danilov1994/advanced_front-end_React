import { FC, memo, useMemo } from 'react';
import { Profile } from 'entities/Profile';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { Loader } from 'widgets/Loader/ui/Loader';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'shared/const/common';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  profile?: Profile;
  isLoading?: boolean;
  readonly?: boolean;
  error?: string;
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
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangCurrency,
        isLoading,
        error,
        profile,
        readonly,
    } = props;

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
            <Avatar
                src={profile?.avatar}
                size={AvatarSize.M}
                className={cls.avatar}
            />
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваше имя')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={profile?.first}
                    placeholder={t('Ваше имя')}
                    readonly={readonly}
                    onChange={onChangeFirstName}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваша фамилия')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={profile?.lastname}
                    placeholder={t('Ваша фамилия')}
                    readonly={readonly}
                    onChange={onChangeLastName}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваш возраст')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={`${profile?.age}`}
                    type="number"
                    placeholder={t('Ваш возраст')}
                    readonly={readonly}
                    onChange={onChangeAge}
                    min={16}
                    max={100}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваш город')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={profile?.city}
                    placeholder={t('Ваш город')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваш аватар')} />
                <Input
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [])}
                    value={profile?.avatar}
                    placeholder={t('Ваш аватар')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваша валюта')} />
                <Select<Currency>
                    optional={currencyList}
                    currentValue={profile?.currency}
                    onChange={onChangCurrency}
                    readonly={readonly}
                />
            </div>
        </div>
    );
});
