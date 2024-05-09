import {
    FC, memo, useMemo, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';

import { getSidebarItem } from '../../model/selectors/getSidebarItem';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const isAuth = useSelector(getAuthData);
    const sidebarItemsList = useSelector(getSidebarItem);

    const toggleCollapsed = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(
        () => sidebarItemsList.map((item) => {
            if (item.authOnly && !isAuth) return null;

            return (
                <SidebarItem item={item} key={item.path} collapsed={collapsed} />
            );
        }),
        [collapsed, isAuth, sidebarItemsList],
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
