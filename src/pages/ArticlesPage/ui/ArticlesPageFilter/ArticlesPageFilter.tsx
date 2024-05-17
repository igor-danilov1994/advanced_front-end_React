import { useSelector } from 'react-redux';
import React, {
    FC, memo, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'pages/ArticlesPage';
import {
    Article,
    articleActions,
    ArticleSortField,
    fetchArticles,
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from 'entities/Article';
import { SortOrder } from 'shared/types';
import { useAppDispatch, useDebounce } from 'shared/lib/hooks';
import { Option } from 'shared/ui/Select/Select';
import { Tabs } from 'shared/ui/Tabs/Tabs';

import cls from './ArticlesPageFilter.module.scss';

interface ArticlesPageFilterProps {
    className?: string;
    articles: Article[];
}

const filterUniqueTitleTab = (articles: Article[]) => {
    const uniqueValues = new Set<string>();

    return articles.reduce((acc: Option<string>[], itm) => {
        if (!uniqueValues.has(itm.type[0])) {
            uniqueValues.add(itm.type[0]);
            acc.push({
                value: itm.type[0],
                content: itm.type[0],
            });
        }
        return acc;
    }, []);
};

export const ArticlesPageFilter: FC<ArticlesPageFilterProps> = memo((props) => {
    const { className, articles } = props;
    const dispatch = useAppDispatch();
    const orderValue = useSelector(getArticlesOrder);
    const sortValue = useSelector(getArticlesSort);
    const searchValue = useSelector(getArticlesSearch);
    const tabValue = useSelector(getArticlesType);

    const tabs: Option<string>[] = useMemo(() => filterUniqueTitleTab(articles), [articles]);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeOrderValue = useCallback(
        (value: SortOrder) => {
            dispatch(articleActions.setOrder(value));
            dispatch(articleActions.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );

    const onChangeSortValue = useCallback(
        (value: ArticleSortField) => {
            dispatch(articleActions.setSort(value));
            dispatch(articleActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearchValue = useCallback(
        (value: string) => {
            dispatch(articleActions.setSearch(value));
            dispatch(articleActions.setPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData],
    );

    const onTabClick = useCallback(
        (value: string) => {
            dispatch(articleActions.setType(value));
            dispatch(articleActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <ArticleSortSelector
                sortValue={sortValue}
                orderValue={orderValue}
                onChangeOrderValue={onChangeOrderValue}
                onChangeSortValue={onChangeSortValue}
            />
            <Card className={cls.search}>
                <Input
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    placeholder="Поиск..."
                />
            </Card>

            <Tabs
                tabTitles={[...tabs, { value: '', content: 'ALL' }]}
                onTabClick={onTabClick}
                value={tabValue}
            />
        </div>
    );
});
