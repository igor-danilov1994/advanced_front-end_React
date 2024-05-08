import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockImage } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleBlockImage;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo((props) => {
    const { t } = useTranslation();
    const { className, block } = props;

    return (
        <div
            className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
        >
            <img src={block.src} alt="image" className={cls.img} />
            {block.title && <Text title={block.title} />}
        </div>
    );
});
