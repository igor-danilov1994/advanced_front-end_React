import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, comments } = props;

    const renderComment = useCallback(
        (comment: Comment) => (
            <CommentCard key={comment.id} comment={comment} className={cls.comment} />
        ),
        [],
    );

    if (!comments?.length) {
        return <Text title="Коментарии отсутствуют" />;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            {comments?.length && comments.map(renderComment)}
        </div>
    );
});
