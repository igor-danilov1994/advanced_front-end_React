import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, articleDetailsReducer } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { commentsReducer } from 'entities/Comment';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articlesDetails: articleDetailsReducer,
    comments: commentsReducer,
};

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = memo((props) => {
    const { t } = useTranslation();
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                Назад к списку
            </Button>
            <div className={classNames(cls.ArticlesDatailsPage, {}, [className])}>
                {id && <ArticleDetails articleId={id} />}
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticlesDetailsPage;
