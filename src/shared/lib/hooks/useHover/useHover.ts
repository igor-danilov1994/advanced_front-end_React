import { useCallback, useMemo, useState } from 'react';

interface UseHoverCallbacks {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverReturnTypes = [boolean, UseHoverCallbacks];

export const useHover = (): UseHoverReturnTypes => {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);
    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(
        () => [isHover, { onMouseEnter, onMouseLeave }],
        [isHover, onMouseEnter, onMouseLeave],
    );
};
