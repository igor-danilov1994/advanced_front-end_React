import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { SizeText, Text } from 'shared/ui/Text/Text';
import {
    Article,
    ArticleBlocks,
    ArticleBlocksType,
    ArticleCodeBlockComponent,
    ArticleImageBlockComponent,
    ArticleTextBlockComponent,
    ArticleView,
} from 'entities/Article';

import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import EyeIcon from 'shared/assets/eyeIcon.svg';
import SchedulerIcon from 'shared/assets/schedulerIcon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { CommentList } from 'entities/Comment';

import { AddCommentForm } from 'feature/addNewComment';
import { addNewComment } from 'feature/addNewComment/model/services/addNewComment';
import {
    getArticlesDetailsError,
    getArticlesDetailsLoading,
} from 'pages/ArticlesDetailsPage';
import { getArticleComments } from 'entities/Comment/model/slice/commentsSlice';
import { getCommentsLoading } from 'entities/Comment/model/selectors/getComments';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  view?: ArticleView;
  article: Article;
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const loading = useSelector(getArticlesDetailsLoading);
    const error = useSelector(getArticlesDetailsError);
    const { className, article, view } = props;
    const comments = useSelector(getArticleComments.selectAll);

    const isLoadingComment = useSelector(getCommentsLoading);

    const onSendTextComment = useCallback(() => {
        dispatch(addNewComment(article?.id));
    }, [dispatch, article?.id]);

    const renderBlock = useCallback((block: ArticleBlocks) => {
        switch (block.type) {
        case ArticleBlocksType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.type}
                    block={block}
                    className={cls.block}
                />
            );

        case ArticleBlocksType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.type}
                    block={block}
                    className={cls.block}
                />
            );

        case ArticleBlocksType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.type}
                    block={block}
                    className={cls.block}
                />
            );

        default:
            return null;
        }
    }, []);

    if (loading) {
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

    if (error) {
        return <Text title={t('Произошла ошибка при загрузке статьи.')} />;
    }

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <div className={cls.avatarWrapper}>
                <img alt={article.title} src={article.img} className={cls.img} />
            </div>
            <Text
                size={SizeText.SizeM}
                title={article?.title}
                text={article?.subtitle}
            />
            <div className={cls.articleInfo}>
                <Icon className={cls.icon} Svg={EyeIcon} />
                <Text title={`${article?.views}`} />
            </div>
            <div className={cls.articleInfo}>
                <Icon className={cls.icon} Svg={SchedulerIcon} />
                <Text title={`${article?.created}`} />
            </div>

            {article?.blocks.map(renderBlock)}

            <CommentList isLoading={isLoadingComment} comments={comments} />

            <Text title="Ваш коментарий" />

            <AddCommentForm onSendComment={onSendTextComment} />
        </div>
    );
});
