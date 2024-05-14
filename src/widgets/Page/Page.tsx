import {
    FC, memo, MutableRefObject, UIEvent, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import { getUiScrollByPath, UiScrollActions } from 'feature/UiScroll';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/provider/StoreProvider';
import { useThrottling } from 'shared/lib/hooks/useThrottling/useThrottling';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = memo((props) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getUiScrollByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [wrapperRef, scrollPosition]);

    const onScrollHandler = useThrottling((e: UIEvent<HTMLDivElement>) => {
        const { scrollTop } = e.currentTarget;
        dispatch(
            UiScrollActions.setScrollPosition({
                position: scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    return (
        <section
            ref={wrapperRef}
            onScroll={onScrollHandler}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
