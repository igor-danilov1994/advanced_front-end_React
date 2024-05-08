import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleBlockText } from 'entities/Article';

import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleBlockText;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo((props) => {
    const { t } = useTranslation();
    const { className, block } = props;

    return (
        <div
            className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
        >
            <Text title={block.title} className={cls.title} />
            {block.paragraphs.map((paragraph) => (
                <Text text={paragraph} key={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
