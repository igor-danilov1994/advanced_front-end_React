import { StateSchema } from 'app/provider/StoreProvider';

export const getArticleRecommendationLoading = (state: StateSchema) => state.recommendationArticles?.isLoading || false;
export const getArticleRecommendationError = (state: StateSchema) => state.recommendationArticles?.error || '';
