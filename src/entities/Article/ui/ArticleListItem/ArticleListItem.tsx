import { FC, HTMLAttributeAnchorTarget, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import {
    Article,
    ArticleBlocksType,
    ArticleBlockText,
    ArticleTextBlockComponent,
    ArticleView,
} from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/eyeIcon.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  onNewTab?: HTMLAttributeAnchorTarget;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const {
        className, article, view, onNewTab,
    } = props;
    const [isHover, bindHover] = useHover();
    // const navigate = useNavigate();

    // const onOpenArticle = useCallback(() => {
    //     navigate();
    // }, [article.id, navigate]);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (art) => art.type === ArticleBlocksType.TEXT,
        ) as ArticleBlockText;

        return (
        // BIG ARTICLE
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar src={article.user.avatar} className={cls.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.created} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text title={article.type.join(', ')} className={cls.types} />
                    <img src={article.img} className={cls.img} alt="img" />

                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}

                    <div className={cls.footer}>
                        <AppLink to={`${RoutePath.articles_details}${article.id}`}>
                            <Button theme={ButtonTheme.OUTLINE}>Читать далее...</Button>
                        </AppLink>
                        <Icon Svg={EyeIcon} className={cls.icon} />
                        <Text title={`${article.views}`} className={cls.views} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
    // SMALL ARTICLE
        <AppLink
            to={`${RoutePath.articles_details}${article.id}`}
            target={onNewTab}
            {...bindHover}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt="article" />
                    <Text title={article.created} className={cls.date} />
                </div>

                <div className={cls.infoWrapper}>
                    <Text title={article.type.join(', ')} className={cls.types} />
                    <Text title={`${article.views}`} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
