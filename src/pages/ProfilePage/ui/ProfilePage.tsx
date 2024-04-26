import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';

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

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                {profile && <ProfileCard profile={profile} />}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
