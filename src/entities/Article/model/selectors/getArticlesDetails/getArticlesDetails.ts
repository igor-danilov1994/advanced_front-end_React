import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getArticlesDetails = (state: StateSchema) => state?.articlesDetails?.data;
