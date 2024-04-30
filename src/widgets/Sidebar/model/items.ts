import React from 'react';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/main_page_icon.svg';
import AboutPageIcon from 'shared/assets/about_page_icon.svg';
import ProfileIconIcon from 'shared/assets/profile_icon.svg';

export interface SidebarItemsType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemsType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainPageIcon,
    },
    {
        path: RoutePath.about,
        text: 'О нас',
        Icon: AboutPageIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIconIcon,
        authOnly: true,
    },
];
