import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleRecommended = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articlesRecommended/fetchArticlesRecommended', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _limit: 4,
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
