import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleSchema, fetchArticles } from 'entities/Article';

const initialState: ArticleSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<any>) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Ошибка';
            });
    },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
