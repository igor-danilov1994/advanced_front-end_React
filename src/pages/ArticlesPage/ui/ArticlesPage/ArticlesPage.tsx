import React, {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import {
    articleReducer,
    fetchArticleList,
    getArticles,
    getArticlesView,
    initArticlePage,
} from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { Page } from 'widgets/Page/Page';

import { ArticlesPageFilter } from '../../ui/ArticlesPageFilter/ArticlesPageFilter';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articles: articleReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
    const articles = useSelector(getArticles);
    const view = useSelector(getArticlesView);
    const dispatch = useAppDispatch();

    const [params] = useSearchParams();

    const { className } = props;
    const articlesList = articles?.data ?? [];

    useEffect(() => {
        dispatch(initArticlePage(params));
    }, [dispatch, params]);

    const uploadMoreArticles = useCallback(() => {
        dispatch(fetchArticleList());
    }, [dispatch]);

    const getSkeleton = useCallback(
        () => (
            <div>
                <Skeleton
                    className={classNames(cls.avatar, {}, [cls.skeleton])}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        ),
        [],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removedAfterUnmount={false}>
            <Page onScrollEnd={uploadMoreArticles}>
                <div className={classNames(cls.ArticlesPage, {}, [className])}>
                    {articles?.data && <ArticlesPageFilter articles={articles?.data} />}
                </div>
                <ArticleList className={cls.list} articles={articlesList} view={view} />

                {articles?.isLoading && getSkeleton()}
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
