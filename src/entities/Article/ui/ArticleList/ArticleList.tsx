import {
    FC, HTMLAttributeAnchorTarget, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from 'entities/Article';
import { Loader } from 'widgets/Loader/ui/Loader';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  onNewTab?: HTMLAttributeAnchorTarget;
  view: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const {
        className, articles, view, isLoading, onNewTab,
    } = props;

    const renderArticle = useCallback(
        (article: Article) => (
            <ArticleListItem
                className={cls.card}
                key={article.id}
                article={article}
                view={view}
                onNewTab={onNewTab}
            />
        ),
        [onNewTab, view],
    );

    if (isLoading) {
        return <Loader />;
    }

    if (!articles.length) {
        return null;
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.map(renderArticle)}
        </div>
    );
});
