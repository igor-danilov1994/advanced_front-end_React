import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { ArticleView } from 'entities/Article';
import { ArticleSortField } from '../../types/article';

export const getArticles = (state: StateSchema) => state?.articles;
export const getArticlesView = (state: StateSchema) => state.articles?.view || ArticleView.SMALL;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit;
export const getArticlesPage = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesPageInit = (state: StateSchema) => state?.articles?._inited;
export const getArticlesOrder = (state: StateSchema) => state?.articles?.order || 'asc';
export const getArticlesSort = (state: StateSchema) => state?.articles?.sort ?? ArticleSortField.CREATED;
export const getArticlesSearch = (state: StateSchema) => state?.articles?.search ?? '';
export const getArticlesType = (state: StateSchema) => state?.articles?.type ?? 'ALL';

export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;
