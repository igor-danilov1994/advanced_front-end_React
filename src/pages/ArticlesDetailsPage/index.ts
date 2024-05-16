export { ArticlesDetailsPageAsync as ArticlesDetailsPage } from './ui/ArticlesDatailsPage/ArticlesDetailsPage.async';
export { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export {
    getArticlesDetails,
    getArticlesDetailsError,
    getArticlesDetailsLoading,
} from './model/selectors/getArticleDetails';
export {
    articleDetailsSlice,
    articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
