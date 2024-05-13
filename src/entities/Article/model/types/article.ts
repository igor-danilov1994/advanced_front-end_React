import { User } from 'entities/User';

export interface ArticleBlocksBase {
  id: string;
  type: string;
}

export enum ArticleBlocksType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export interface ArticleBlockText extends ArticleBlocksBase {
  type: ArticleBlocksType.TEXT;
  paragraphs: string[];
  title: string;
}

export interface ArticleBlockCode extends ArticleBlocksBase {
  type: ArticleBlocksType.CODE;
  code: string;
}

export interface ArticleBlockImage extends ArticleBlocksBase {
  type: ArticleBlocksType.IMAGE;
  src: string;
  title?: string;
}

export type ArticleBlocks =
  | ArticleBlockText
  | ArticleBlockCode
  | ArticleBlockImage;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  user: User;
  img: string;
  views: number;
  created: string;
  type: string[];
  blocks: ArticleBlocks[];
}

export interface ArticleSchema {
  error?: string;
  isLoading: boolean;
  data?: Article[];
  // eslint-disable-next-line no-use-before-define
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface Comments {
  id: string;
  text: string;
  articleId: string;
  userId: string;
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}
