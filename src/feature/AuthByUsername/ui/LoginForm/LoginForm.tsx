import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                value={login}
                onChange={setLogin}
                type="text"
                placeholder={t('Логин')}
            />
            <Input
                value={password}
                onChange={setPassword}
                type="text"
                placeholder={t('Пароль')}
            />

            <Button className={classNames(cls.loginBtn)}>{t('Войти')}</Button>
        </div>
    );
});
