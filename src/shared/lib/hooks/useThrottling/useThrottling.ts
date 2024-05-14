import { useCallback, useRef } from 'react';

export const useThrottling = (
    callback: (...arg: any[]) => void,
    delay: number,
) => {
    const throttleRef = useRef(false);

    return useCallback(
        (...arg) => {
            if (!throttleRef.current) {
                callback(...arg);
                throttleRef.current = true;
            }

            setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        },
        [delay, callback],
    );
};
