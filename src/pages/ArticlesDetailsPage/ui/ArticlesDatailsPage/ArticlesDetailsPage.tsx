import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = memo((props) => {
    const { t } = useTranslation();
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <div className={classNames(cls.ArticlesDatailsPage, {}, [className])}>
            {id && <ArticleDetails articleId={id} />}
        </div>
    );
});

export default ArticlesDetailsPage;
