import {
    FC, memo, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const isAuth = useSelector(getAuthData);
    const { t } = useTranslation();

    const toggleCollapsed = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(
        () => SidebarItemsList.map((item) => {
            if (item.authOnly && !isAuth) return null;

            return (
                <SidebarItem item={item} key={item.path} collapsed={collapsed} />
            );
        }),
        [collapsed, isAuth],
    );

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={toggleCollapsed}
                className={classNames(cls.collapsed_btn)}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>

            {itemsList}

            <div className={cls.navigation} />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={classNames(cls.lang)} />
            </div>
        </div>
    );
});
