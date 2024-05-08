import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getArticlesDetailsError = (state: StateSchema) => state.articlesDetails?.error;
