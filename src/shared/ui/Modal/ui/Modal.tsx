import {
    FC,
    MouseEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const [isClosing, setClose] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const {
        className, children, isOpen, onClose,
    } = props;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setClose(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setClose(false);
            }, 300);
        }
    }, [onClose]);

    const onKeydown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeydown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeydown);
        };
    }, [isOpen, onKeydown]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={classNames(cls.overlay)} onClick={closeHandler}>
                    <div className={cls.content} onClick={(e) => onContentClick(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
