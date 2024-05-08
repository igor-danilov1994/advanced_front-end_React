import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';

import { Text, ThemeText } from 'shared/ui/Text/Text';
import {
    loginActions,
    loginReducer,
} from 'feature/AuthByUsername/model/slice/loginSlice';
import { getLoading } from 'feature/AuthByUsername/model/selectors/getLoading/getLoading';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getError } from '../../model/selectors/getError/getError';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onClose: () => void;
}

const reducers: ReducersList = {
    login: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const error = useSelector(getError);
    const isLoading = useSelector(getLoading);

    const { className, onClose } = props;

    const onChangeLogin = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(loginByUsername({ username, password }));

        if (res.meta.requestStatus === 'fulfilled') onClose();
    }, [username, password, dispatch, onClose]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={error} theme={ThemeText.ERROR} />}

                <Input
                    value={username}
                    onChange={onChangeLogin}
                    type="text"
                    placeholder={t('Логин')}
                />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    type="text"
                    placeholder={t('Пароль')}
                />

                <Button
                    disabled={isLoading}
                    className={classNames(cls.loginBtn)}
                    onClick={onLoginClick}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
