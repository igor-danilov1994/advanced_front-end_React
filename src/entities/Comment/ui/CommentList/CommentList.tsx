import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments: Comment[];
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, isLoading, comments } = props;

    if (!comments.length) {
        return <Text title="Комментариев нет" />;
    }

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
