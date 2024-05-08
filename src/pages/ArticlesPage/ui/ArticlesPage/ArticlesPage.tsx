import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import {
    ArticleDetails,
    articleDetailsReducer,
    articleReducer,
    fetchArticles,
} from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticles } from 'entities/Article/model/selectors/getArticles/getArticles';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { commentsReducer } from 'entities/Comment';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articles: articleReducer,
    articlesDetails: articleDetailsReducer,
    comments: commentsReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles);

    const { className } = props;
    const articlesList = articles?.data ?? [];

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    if (articles?.isLoading) {
        return (
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
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                {articlesList.map((article) => (
                    <ArticleDetails key={article.id} article={article} />
                ))}
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
