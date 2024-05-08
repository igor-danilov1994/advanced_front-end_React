import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getArticlesDetailsLoading = (state: StateSchema) => state.articlesDetails?.isLoading;
