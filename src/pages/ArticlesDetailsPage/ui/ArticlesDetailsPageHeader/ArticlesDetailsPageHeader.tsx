import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticlesDetailsPageHeader.module.scss';

interface ArticlesDetailsPageHeaderProps {
  className?: string;
  isOwner: boolean;
  articleId?: string;
}

export const ArticlesDetailsPageHeader: FC<ArticlesDetailsPageHeaderProps> = memo((props) => {
    const navigate = useNavigate();
    const { className, isOwner, articleId } = props;

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEdit = useCallback(() => {
        navigate(`${RoutePath.articles}/${articleId}/edit`);
    }, [navigate, articleId]);

    return (
        <div
            className={classNames(cls.ArticlesDetailsPageHeader, {}, [className])}
        >
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                Назад к списку
            </Button>
            {isOwner && (
                <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                    Редактировать
                </Button>
            )}
        </div>
    );
});
