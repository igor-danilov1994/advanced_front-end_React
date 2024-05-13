import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from 'entities/Article/model/selectors/getArticles/getArticles';

interface FetchArticlesPayload {
  page?: number;
}

export const fetchArticles = createAsyncThunk<
  Article,
  FetchArticlesPayload,
  ThunkConfig<string>
>('article/fetchArticles', async ({ page = 1 }, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = getArticlesLimit(getState());

    try {
        const response = await extra.api.get<Article>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
