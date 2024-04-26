import { FC, memo } from 'react';
import { ProfileSchema } from 'entities/Profile';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text /Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  profile: ProfileSchema;
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const { t } = useTranslation();
    const { className, profile } = props;
    const { data } = profile;

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text text={t('Профиль')} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>

            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваше имя')} />
                <Input value={data?.first} placeholder={t('Ваше имя')} />
            </div>
            <div className={cls.data}>
                <Text className={cls.text} text={t('Ваша фамилия')} />
                <Input value={data?.lastname} placeholder={t('Ваша фамилия')} />
            </div>
        </div>
    );
});
