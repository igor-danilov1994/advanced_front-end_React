import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Option } from 'shared/ui/Select/Select';
import cls from './Tabs.module.scss';

interface TabProps {
  className?: string;
  tabTitles: Option<string>[];
  onTabClick: (tabName: string) => void;
  value: string;
}

export const Tabs: FC<TabProps> = memo((props) => {
    const {
        className, tabTitles, value, onTabClick,
    } = props;

    const renderTab = useCallback(
        (tab: Option<string>) => (
            <Card
                key={tab.value}
                className={cls.tab}
                onClick={() => onTabClick(tab.value)}
                theme={tab.value === value ? CardTheme.ACTIVE : undefined}
            >
                {tab.content}
            </Card>
        ),
        [onTabClick, value],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabTitles.map(renderTab)}
        </div>
    );
});
