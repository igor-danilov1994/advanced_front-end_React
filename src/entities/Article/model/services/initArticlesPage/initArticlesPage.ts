import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import {
    articleActions,
    fetchArticles,
    getArticlesPageInit,
} from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('article/initArticlePage', async (params, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const inited = getArticlesPageInit(getState());

    const orderFromUrl = params.get('order') as SortOrder;
    const sortFromUrl = params.get('sort') as ArticleSortField;
    const searchFromUrl = params.get('search');
    const typeFromUrl = params.get('type');

    if (orderFromUrl) {
        dispatch(articleActions.setOrder(orderFromUrl));
    }
    if (sortFromUrl) {
        dispatch(articleActions.setSort(sortFromUrl));
    }
    if (searchFromUrl) {
        dispatch(articleActions.setSearch(searchFromUrl));
    }
    if (typeFromUrl) {
        dispatch(articleActions.setType(typeFromUrl));
    }

    if (!inited) {
        dispatch(articleActions.setInit());
        dispatch(fetchArticles({}));
    }
});
