import {
    FC, memo, useCallback, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'feature/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User';
import { getAuthData } from 'entities/User/modal/selectors/getAuthData/getAuthData';
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

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={user ? logoutHandler : onShowModal}
            >
                {t(user ? 'Выйти' : 'Войти')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onCloseModal} />
        </div>
    );
});
