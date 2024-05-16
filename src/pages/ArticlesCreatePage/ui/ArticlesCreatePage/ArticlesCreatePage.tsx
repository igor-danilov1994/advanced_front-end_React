import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import cls from './ArticlesCreatePage.module.scss';

interface ArticlesCreatePageProps {
  className?: string;
}

export const ArticlesCreatePage: FC<ArticlesCreatePageProps> = memo((props) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.ArticlesCreatePage, {}, [className])}>
            ArticlesCreatePage
        </Page>
    );
});
