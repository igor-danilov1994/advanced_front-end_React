import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { StateSchema } from 'app/provider/StoreProvider';
import { fetchArticleRecommended } from '../../model/services/fetchArticleRecommended/fetchArticleRecommended';
import { ArticleDetailsPageRecommendedSchema } from '../../model/types/articleDetailsPageRecommendedSchema';

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendation = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.recommendationArticles || recommendationAdapter.getInitialState(),
);

export const articleDetailsPageRecommendedSlice = createSlice({
    name: 'articleDetailsPageRecommendedSlice',
    initialState:
    recommendationAdapter.getInitialState<ArticleDetailsPageRecommendedSchema>({
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommended.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticleRecommended.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false;
                    recommendationAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticleRecommended.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Ошибка';
            });
    },
});

export const { actions: articleDetailsPageRecommendedActions } = articleDetailsPageRecommendedSlice;
export const { reducer: articleDetailsPageRecommendedReducer } = articleDetailsPageRecommendedSlice;
