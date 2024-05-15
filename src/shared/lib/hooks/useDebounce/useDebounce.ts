import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (
    callback: (...arg: any[]) => void,
    delay: number,
) => {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback(
        (...arg) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...arg);
            }, delay);
        },
        [delay, callback],
    );
};
