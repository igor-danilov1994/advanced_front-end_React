import React from 'react';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/main_page_icon.svg';
import AboutPageIcon from 'shared/assets/about_page_icon.svg';
import ProfileIcon from 'shared/assets/profile_icon.svg';
import ArticlesIcon from 'shared/assets/articles.svg';

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
        path: `${RoutePath.profile}`,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Статьи ',
        Icon: ArticlesIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles_details,
        text: 'Статья',
        Icon: ArticlesIcon,
        authOnly: true,
    },
];
