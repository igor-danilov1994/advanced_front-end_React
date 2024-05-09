import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUsername';
import {
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import type { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router-dom';
import { ArticleDetailsSchema, ArticleSchema } from 'entities/Article';
import { CommentsSchema } from 'entities/Comment/model/types/comment';
import { AddNewCommentsFormSchema } from 'feature/addNewComment';

export interface StateSchema {
  user: UserSchema;

  // Async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
  articles?: ArticleSchema;
  articlesDetails?: ArticleDetailsSchema;
  comments?: CommentsSchema;
  addCommentForm?: AddNewCommentsFormSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: any) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
