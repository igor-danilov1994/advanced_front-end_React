import React, { FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Option, Select } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { articleActions } from 'entities/Article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  orderValue: SortOrder;
  sortValue: ArticleSortField;
  onChangeOrderValue: (opt: SortOrder) => void;
  onChangeSortValue: (opt: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
    (props) => {
        const {
            className,
            sortValue,
            orderValue,
            onChangeSortValue,
            onChangeOrderValue,
        } = props;

        const dispatch = useAppDispatch();

        const setChangeView = () => {
            dispatch(articleActions.setView());
        };

        const sortOptions: Option<ArticleSortField>[] = useMemo(
            () => [
                {
                    value: ArticleSortField.CREATED,
                    content: 'дате создания',
                },
                {
                    value: ArticleSortField.VIEW,
                    content: 'количеству просмотров',
                },
                {
                    value: ArticleSortField.TITLE,
                    content: 'заголовку',
                },
            ],
            [],
        );

        const orderOptions: Option<SortOrder>[] = useMemo(
            () => [
                {
                    value: 'asc',
                    content: 'возрастанию',
                },
                {
                    value: 'desc',
                    content: 'по убыввнию',
                },
            ],
            [],
        );

        return (
            <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
                <div className={cls.wrapper}>
                    <Select
                        label="Сортировать по "
                        currentValue={sortValue}
                        optional={sortOptions}
                        className={cls.sort}
                        onChange={onChangeSortValue}
                    />
                    <Select<SortOrder>
                        label="по"
                        currentValue={orderValue}
                        optional={orderOptions}
                        className={cls.order}
                        onChange={onChangeOrderValue}
                    />
                </div>
                <div className={cls.sortWrapper}>
                    <Button onClick={setChangeView}>Change view</Button>
                </div>
            </div>
        );
    },
);
