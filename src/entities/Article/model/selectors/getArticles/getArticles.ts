import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getArticles = (state: StateSchema) => state?.articles;
