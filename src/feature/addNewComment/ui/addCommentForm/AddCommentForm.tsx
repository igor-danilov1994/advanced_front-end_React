import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormError,
    addCommentFormText,
} from 'feature/addNewComment/model/selectors/addComments';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';
import {
    newCommentActions,
    newCommentReducer,
} from '../../model/slice/addNewCommentFormSlice';

import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: newCommentReducer,
};

export const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const { className, onSendComment } = props;
    const dispatch = useAppDispatch();
    const text = useSelector(addCommentFormText);
    const error = useSelector(addCommentFormError);

    const onSetComment = useCallback(
        (text: string) => {
            dispatch(newCommentActions.setText(text));
        },
        [dispatch],
    );
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    value={text}
                    onChange={onSetComment}
                    placeholder="Введите текст коментария"
                />
                <Button
                    className={cls.sendBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={() => onSendComment(text ?? '')}
                >
                    Отправить
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};
