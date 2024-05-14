import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleSchema, ArticleView, fetchArticles } from 'entities/Article';

const initialState: ArticleSchema = {
    isLoading: false,
    error: undefined,
    data: [],
    page: 1,
    hasMore: true,
    view: ArticleView.BIG,
    limit: 4,
    _inited: false,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setInit: (state) => {
            state.limit = state.view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
        setView: (state) => {
            if (state.view === ArticleView.SMALL) {
                state.view = ArticleView.BIG;
            } else {
                state.view = ArticleView.SMALL;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<any>) => {
                state.data = [...state.data!, ...action.payload];
                state.isLoading = false;
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Ошибка';
            });
    },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
