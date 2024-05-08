import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
  readonly?: boolean;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { className, readonly } = props;

    const changeReadonlyState = () => {
        dispatch(profileActions.changeReadonly(!readonly));
    };

    const saveProfileData = () => {
        dispatch(updateProfileData());
    };

    const cancel = () => {
        dispatch(profileActions.cancel());
    };

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text text={t('Профиль')} />
                {!readonly ? (
                    <div>
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={cancel}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={saveProfileData}
                        >
                            {t('Сохранить')}
                        </Button>
                    </div>
                ) : (
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={changeReadonlyState}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </div>
        </div>
    );
});
