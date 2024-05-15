import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import {
    articleActions,
    fetchArticles,
    getArticlesHasMore,
    getArticlesPage,
} from 'entities/Article';

export const fetchArticleList = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('article/fetchArticleList', async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlesHasMore(getState());
    const page = getArticlesPage(getState());

    if (hasMore) {
        dispatch(articleActions.setPage(page + 1));
        dispatch(fetchArticles({}));
    }
});
