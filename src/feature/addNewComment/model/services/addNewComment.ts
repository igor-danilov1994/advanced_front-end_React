import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/provider/StoreProvider';
import { getAuthData } from 'entities/User';
import { Comment } from 'entities/Comment';
import { fetchComments } from 'entities/Comment/model/services/fetchComments';
import { newCommentActions } from '../slice/addNewCommentFormSlice';
import { addCommentFormText } from '../selectors/addComments';

export const addNewComment = createAsyncThunk<
  Comment,
  string | undefined,
  ThunkConfig<string>
>('addNewComment/addNewComment', async (articleId, thunkAPI) => {
    const {
        extra, getState, dispatch, rejectWithValue,
    } = thunkAPI;

    const userData = getAuthData(getState());
    const text = addCommentFormText(getState());

    if (!userData || !text || !articleId) {
        return rejectWithValue('No data');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(newCommentActions.setText(''));
        dispatch(fetchComments(articleId));

        return response.data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
