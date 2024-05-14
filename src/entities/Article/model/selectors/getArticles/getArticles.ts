import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { ArticleView } from 'entities/Article';

export const getArticles = (state: StateSchema) => state?.articles;
export const getArticlesView = (state: StateSchema) => state.articles?.view || ArticleView.SMALL;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit;
export const getArticlesPage = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesPageInit = (state: StateSchema) => state?.articles?._inited;

export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;
export const getArticlesDetailsError = (state: StateSchema) => state.articlesDetails?.error;
export const getArticlesDetailsLoading = (state: StateSchema) => state.articlesDetails?.isLoading;
export const getArticlesDetails = (state: StateSchema) => state?.articlesDetails?.data;
