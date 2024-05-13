import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScroll {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScroll) {
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        const triggerRefElement = triggerRef.current;
        const wrapperRefElement = wrapperRef.current;

        if (callback) {
            const options = {
                root: wrapperRefElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRefElement);

            return () => {
                if (observer && triggerRefElement) observer.unobserve(triggerRefElement);
            };
        }
    }, [callback, triggerRef, wrapperRef]);
}
