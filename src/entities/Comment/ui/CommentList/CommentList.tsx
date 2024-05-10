import { FC, memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { fetchComments } from 'entities/Comment/model/services/fetchComments';
import { useSelector } from 'react-redux';
import { getArticleComments } from 'entities/Comment/model/slice/commentsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { getCommentsLoading } from 'entities/Comment/model/selectors/getComments';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  articleId?: string;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, articleId } = props;
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getCommentsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (articleId) {
            dispatch(fetchComments(articleId));
        }
    }, [dispatch, articleId]);

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            {comments.map((comment) => (
                <CommentCard
                    key={comment.id}
                    comment={comment}
                    className={cls.comment}
                    isLoading={isLoading}
                />
            ))}
        </div>
    );
});
