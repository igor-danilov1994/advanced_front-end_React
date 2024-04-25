import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text /Text';

import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import cls from './ProfilePage.module.scss';

export interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removedAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <Text text="ProfilePage" />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
