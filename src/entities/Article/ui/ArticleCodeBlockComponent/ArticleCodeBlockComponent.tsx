import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockCode } from 'entities/Article';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleBlockCode;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo((props) => {
    const { className, block } = props;

    return (
        <div
            className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
        >
            <Code code={block.code} />
        </div>
    );
});
