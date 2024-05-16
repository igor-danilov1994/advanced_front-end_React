import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticlesEditPage.module.scss';

interface ArticlesEditPageProps {
  className?: string;
}

export const ArticlesEditPage: FC<ArticlesEditPageProps> = memo((props) => {
    const { className } = props;
    const { id } = useParams();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticlesEditPage, {}, [className])}>
            {isEdit ? 'Редактирование' : 'Создание'}
        </Page>
    );
});
