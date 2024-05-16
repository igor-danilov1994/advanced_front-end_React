import { StateSchema } from 'app/provider/StoreProvider';
import { ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../types/article';

export const getArticles = (state: StateSchema) => state?.articles;
export const getArticlesView = (state: StateSchema): ArticleView => state.articles?.view || ArticleView.SMALL;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit;
export const getArticlesPage = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesPageInit = (state: StateSchema) => state?.articles?._inited;
export const getArticlesOrder = (state: StateSchema): SortOrder => state?.articles?.order || 'asc';
export const getArticlesSort = (state: StateSchema): ArticleSortField => state?.articles?.sort ?? ArticleSortField.VIEW;
export const getArticlesSearch = (state: StateSchema) => state?.articles?.search ?? '';
export const getArticlesType = (state: StateSchema) => state?.articles?.type ?? 'ALL';
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;
