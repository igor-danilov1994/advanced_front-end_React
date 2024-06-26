export { ArticlesDetailsPageAsync as ArticlesDetailsPage } from './ui/ArticlesDatailsPage/ArticlesDetailsPage.async';
export { ArticlesDetailsPageHeader } from './ui/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
export { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { ArticleDetailsPageRecommendedSchema } from './model/types/articleDetailsPageRecommendedSchema';
export {
    getArticlesDetails,
    getArticlesDetailsError,
    getArticlesDetailsLoading,
} from './model/selectors/getArticleDetails';
export {
    articleDetailsSlice,
    articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export {
    getArticleRecommendationLoading,
    getArticleRecommendationError,
} from './model/selectors/recommendation';

export { fetchArticleById } from './model/services';
