import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import {
    articleActions,
    fetchArticles,
    getArticlesPageInit,
} from 'entities/Article';

export const initArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('article/initArticlePage', async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const inited = getArticlesPageInit(getState());

    if (!inited) {
        dispatch(articleActions.setInit());
        dispatch(fetchArticles({ page: 1 }));
    }
});
