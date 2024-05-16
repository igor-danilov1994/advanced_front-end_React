import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { commentsReducer } from 'entities/Comment';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import {
    articleDetailsReducer,
    getArticleRecommendationError,
    getArticleRecommendationLoading,
} from 'pages/ArticlesDetailsPage';

import { ArticleDetails, ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { fetchArticleRecommended } from '../../model/services/fetchArticleRecommended/fetchArticleRecommended';
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
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const recommendation = useSelector(getArticleRecommendation.selectAll);
    const isLoading = useSelector(getArticleRecommendationLoading);
    const error = useSelector(getArticleRecommendationError);

    useEffect(() => {
        dispatch(fetchArticleRecommended());
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <DynamicModuleLoader reducers={reducers} removedAfterUnmount={false}>
            <Page>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    Назад к списку
                </Button>
                <div className={classNames(cls.ArticlesDatailsPage, {}, [className])}>
                    {id && <ArticleDetails articleId={id} />}
                </div>
                <Text className={cls.recommendedTitle} title="Рекомендуем" />
                <ArticleList
                    articles={recommendation}
                    isLoading={isLoading}
                    view={ArticleView.SMALL}
                    className={cls.recommended}
                    onNewTab="_blank"
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesDetailsPage;
