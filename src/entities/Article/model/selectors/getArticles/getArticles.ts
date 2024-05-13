import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { ArticleView } from 'entities/Article';

export const getArticles = (state: StateSchema) => state?.articles;
export const getArticlesView = (state: StateSchema) => state.articles?.view || ArticleView.SMALL;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit;
export const getArticlesPage = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;
