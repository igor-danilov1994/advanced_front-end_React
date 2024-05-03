import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = memo((props) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <div className={classNames(cls.ArticlesDatailsPage, {}, [className])}>ArticlesDetailsPage</div>
    );
});

export default ArticlesDetailsPage;
