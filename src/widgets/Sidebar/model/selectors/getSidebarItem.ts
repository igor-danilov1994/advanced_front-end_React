import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/main_page_icon.svg';
import AboutPageIcon from 'shared/assets/about_page_icon.svg';
import ProfileIcon from 'shared/assets/profile_icon.svg';
import ArticlesIcon from 'shared/assets/articles.svg';
import { SidebarItemsType } from 'widgets/Sidebar';

export const getSidebarItem = createSelector(getAuthData, (userData) => {
    const sidebarItemsList: SidebarItemsType[] = [
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
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticlesIcon,
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
