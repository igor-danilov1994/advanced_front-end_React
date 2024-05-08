import { Article } from 'entities/Article';

export interface ArticleDetailsSchema {
    error?: string,
    isLoading: boolean
    data?: Article
}
