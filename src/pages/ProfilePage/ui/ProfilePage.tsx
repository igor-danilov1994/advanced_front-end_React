import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
import { Text, ThemeText } from 'shared/ui/Text/Text';

import { ProfilePageHeader } from 'pages/ProfilePage';
import { Currency } from 'shared/const/common';
import { getProfileValidateError } from 'entities/Profile/model/selectors/getProfileValidateError/getProfileValidateError';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { User } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import cls from './ProfilePage.module.scss';

export interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const dispatch = useAppDispatch();
    const profileData = useSelector(getProfileData);
    const validateError = useSelector(getProfileValidateError);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    const currentUser: User = JSON.parse(
    localStorage.getItem(USER_LOCALSTORAGE_KEY)!,
    );

    const loginUser = id ?? currentUser.id;
    const ID: User = JSON.parse(loginUser!);
    const userId = id ?? ID.id;

    const isOwner = currentUser.id === id;

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            if (userId) dispatch(fetchProfileData(userId));
        }
    }, [dispatch, userId]);

    const onChangeFirstName = useCallback(
        (first: string) => {
            dispatch(
                profileActions.changeProfile({
                    first,
                }),
            );
        },
        [dispatch],
    );

    const onChangeLastName = useCallback(
        (lastname: string) => {
            dispatch(
                profileActions.changeProfile({
                    lastname,
                }),
            );
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (avatar: string) => {
            dispatch(
                profileActions.changeProfile({
                    avatar,
                }),
            );
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (age: string) => {
            dispatch(
                profileActions.changeProfile({
                    age: Number(age),
                }),
            );
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (city: string) => {
            dispatch(
                profileActions.changeProfile({
                    city,
                }),
            );
        },
        [dispatch],
    );

    const onChangCurrency = useCallback(
        (currency: Currency) => {
            dispatch(
                profileActions.changeProfile({
                    currency,
                }),
            );
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader
                    isOwner={isOwner}
                    readonly={readonly}
                    profileId={profileData?.id}
                />

                {validateError?.map((error) => (
                    <Text key={error} text={error} theme={ThemeText.ERROR} />
                ))}

                <ProfileCard
                    profile={profileData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAvatar={onChangeAvatar}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangCurrency={onChangCurrency}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
