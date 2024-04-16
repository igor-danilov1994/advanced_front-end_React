import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = memo(() => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const { t } = useTranslation();
    const { increment, decrement } = counterActions;

    const incrementCount = () => {
        dispatch(increment());
    };
    const decrementCount = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <Button data-testid="increment-btn" onClick={incrementCount}>
                {t('Увеличить')}
            </Button>
            <Button data-testid="decrement-btn" onClick={decrementCount}>
                {t('Уменьшить')}
            </Button>
        </div>
    );
});
