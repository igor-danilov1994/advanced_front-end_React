import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyCodeIcon from 'shared/assets/copy_icon.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  code: string;
}

export const Code: FC<CodeProps> = memo((props) => {
    const { className, code } = props;

    const onCopy = useCallback(() => {
    // copy code
        navigator.clipboard.writeText(code);
    }, [code]);

    return (
        <pre className={cls.CodeWrapper}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyCodeIcon className={cls.codeIcon} />
            </Button>
            <code className={classNames(cls.Code, {}, [className])}>{code}</code>
        </pre>
    );
});
