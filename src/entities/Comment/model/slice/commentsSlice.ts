import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { Comment, CommentsSchema } from '../types/comment';
import { fetchComments } from '../services/fetchComments';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.comments || commentsAdapter.getInitialState(),
);

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState<CommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchComments.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    commentsAdapter.setAll(state, action.payload);
                    state.isLoading = false;
                },
            )
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Ошибка';
            });
    },
});

export const { actions: commentsActions } = commentsSlice;
export const { reducer: commentsReducer } = commentsSlice;
