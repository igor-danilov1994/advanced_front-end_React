import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { commentsReducer, fetchComments } from 'entities/Comment';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import {
    articleDetailsReducer,
    ArticlesDetailsPageHeader,
    fetchArticleById,
    getArticleRecommendationError,
    getArticleRecommendationLoading,
    getArticlesDetails,
} from 'pages/ArticlesDetailsPage';

import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks';
import { getAuthData } from 'entities/User';
import { fetchArticleRecommended } from '../../model/services';
import {
    articleDetailsPageRecommendedReducer,
    getArticleRecommendation,
} from '../../model/slice/articleDetailsPageRecommendedSlice';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articlesDetails: articleDetailsReducer,
    comments: commentsReducer,
    recommendationArticles: articleDetailsPageRecommendedReducer,
};

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = memo((props) => {
    const { t } = useTranslation();
    const { className } = props;
    const dispatch = useAppDispatch();
    const recommendation = useSelector(getArticleRecommendation.selectAll);
    const isLoading = useSelector(getArticleRecommendationLoading);
    const error = useSelector(getArticleRecommendationError);
    const article = useSelector(getArticlesDetails);
    const user = useSelector(getAuthData);
    const { id } = useParams<{ id: string }>();
    const isOwner = user?.id === article?.user.id;

    useEffect(() => {
        if (id) {
            dispatch(fetchArticleById(id));
            dispatch(fetchComments(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(fetchArticleRecommended());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removedAfterUnmount={false}>
            <Page>
                <ArticlesDetailsPageHeader isOwner={isOwner} articleId={article?.id} />

                <div className={classNames(cls.ArticlesDatailsPage, {}, [className])}>
                    {article && <ArticleDetails article={article} />}
                </div>
                <Text className={cls.recommendedTitle} title="Рекомендуем" />
                <ArticleList
                    articles={recommendation}
                    isLoading={isLoading}
                    view={ArticleView.SMALL}
                    className={cls.recommended}
                    // onNewTab="_blank"
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesDetailsPage;
