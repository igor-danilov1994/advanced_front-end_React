import {
    FC, memo, useCallback, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'feature/AuthByUsername';
import { getAuthData, userActions } from 'entities/User';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const [isOpen, setOpen] = useState(false);
    const user = useSelector(getAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setOpen(true);
    }, []);

    const logoutHandler = () => {
        dispatch(userActions.logout());
    };

    if (!user) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
                {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
            </header>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Text title="Articles project" theme={ThemeText.INVERTED} />
            <AppLink
                className={cls.edit}
                to={RoutePath.article_create}
                theme={AppLinkTheme.SECONDARY}
            >
                Создать статью
            </AppLink>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={logoutHandler}
            >
                {t('Выйти')}
            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
        </div>
    );
});
