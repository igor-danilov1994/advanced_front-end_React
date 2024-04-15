import { FC, memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<PortalProps> = memo((props) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
});
