import React, {
    FC, memo, useCallback, useEffect,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import {
    articleActions,
    articleReducer,
    fetchArticles,
    getArticles,
    getArticlesHasMore,
    getArticlesPage,
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
import { Button } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page/Page';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articles: articleReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles);
    const view = useSelector(getArticlesView);
    const page = useSelector(getArticlesPage);
    const hasMore = useSelector(getArticlesHasMore);

    const { className } = props;
    const articlesList = articles?.data ?? [];

    useEffect(() => {
        dispatch(initArticlePage());
    }, [dispatch]);

    const setChangeView = () => {
        dispatch(articleActions.setView());
    };

    const uploadMoreArticles = useCallback(() => {
        if (hasMore) {
            dispatch(articleActions.setPage(page + 1));
            dispatch(fetchArticles({ page: page + 1 }));
        }
    }, [dispatch, page, hasMore]);

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
                    <Button onClick={setChangeView}>Change view</Button>
                    <ArticleList articles={articlesList} view={view} />
                </div>

                {articles?.isLoading && getSkeleton()}
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
