import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';

import { Text, ThemeText } from 'shared/ui/Text /Text';
import { loginActions } from 'feature/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [username, password, dispatch]);

    return (
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
    );
});
