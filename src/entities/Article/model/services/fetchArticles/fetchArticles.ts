import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { addQueryParams } from 'shared/lib/addQuertParams/addQuertParams';
import {
    getArticlesLimit,
    getArticlesOrder,
    getArticlesPage,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../selectors/getArticles/getArticles';
import { Article } from '../../types/article';

interface FetchArticlesPayload {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  FetchArticlesPayload,
  ThunkConfig<string>
>('article/fetchArticles', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = getArticlesLimit(getState());
    const order = getArticlesOrder(getState());
    const sort = getArticlesSort(getState());
    const search = getArticlesSearch(getState());
    const page = getArticlesPage(getState());
    const type = getArticlesType(getState());

    try {
        addQueryParams({
            order,
            sort,
            search,
            type,
        });
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                type: type === 'ALL' ? undefined : type,
                q: search,
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
