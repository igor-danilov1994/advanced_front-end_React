import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemsType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?: SidebarItemsType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
    const { t } = useTranslation();
    const { item, collapsed } = props;

    return (
        <AppLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={classNames(cls.main, {}, [cls.link])}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
