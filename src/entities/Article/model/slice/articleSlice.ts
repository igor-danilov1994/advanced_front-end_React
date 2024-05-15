import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SortOrder } from 'shared/types';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import {
    ArticleSchema,
    ArticleSortField,
    ArticleView,
} from '../../model/types/article';

const initialState: ArticleSchema = {
    isLoading: false,
    error: undefined,
    data: [],
    page: 1,
    hasMore: true,
    view: ArticleView.BIG,
    limit: 4,
    _inited: false,
    order: 'asc',
    search: '',
    sort: ArticleSortField.VIEW,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setInit: (state) => {
            state.limit = state.view === ArticleView.BIG ? 4 : 6;
            state._inited = true;
        },
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
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
            .addCase(fetchArticles.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    state.data = [];
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                if (action.meta.arg.replace) {
                    state.data = action.payload;
                } else {
                    state.data = [...state.data!, ...action.payload];
                    state.isLoading = false;
                    state.hasMore = action.payload.length >= state.limit;
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Ошибка';
            });
    },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
