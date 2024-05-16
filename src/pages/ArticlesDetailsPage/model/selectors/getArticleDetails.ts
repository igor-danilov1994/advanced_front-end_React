import { StateSchema } from 'app/provider/StoreProvider';

export const getArticlesDetailsError = (state: StateSchema) => state.articlesDetails?.error;
export const getArticlesDetailsLoading = (state: StateSchema) => state.articlesDetails?.isLoading;
export const getArticlesDetails = (state: StateSchema) => state?.articlesDetails?.data;
