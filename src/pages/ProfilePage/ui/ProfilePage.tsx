import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';

import { ProfilePageHeader } from 'pages/ProfilePage';
import { Currency } from 'shared/const/common';
import cls from './ProfilePage.module.scss';

export interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const profile = useSelector(getProfile);
    const { className } = props;

    useEffect(() => {
        if (!profile) dispatch(fetchProfileData());
    }, [dispatch, profile]);

    const onChangeFirstName = useCallback((first: string) => {
        dispatch(
            profileActions.changeProfile({
                first,
            }),
        );
    }, []);

    const onChangeLastName = useCallback((lastname: string) => {
        dispatch(
            profileActions.changeProfile({
                lastname,
            }),
        );
    }, []);

    const onChangeAvatar = useCallback((avatar: string) => {
        dispatch(
            profileActions.changeProfile({
                avatar,
            }),
        );
    }, []);

    const onChangeAge = useCallback((age: string) => {
        dispatch(
            profileActions.changeProfile({
                age: Number(age),
            }),
        );
    }, []);

    const onChangeCity = useCallback((city: string) => {
        dispatch(
            profileActions.changeProfile({
                city,
            }),
        );
    }, []);

    const onChangCurrency = useCallback((currency: Currency) => {
        dispatch(
            profileActions.changeProfile({
                currency,
            }),
        );
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader readonly={profile?.readonly} />
                {profile && (
                    <ProfileCard
                        profile={profile}
                        onChangeFirstName={onChangeFirstName}
                        onChangeLastName={onChangeLastName}
                        onChangeAvatar={onChangeAvatar}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangCurrency={onChangCurrency}
                    />
                )}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
