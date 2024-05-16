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
import { ArticleSchema } from 'entities/Article';
import { CommentsSchema } from 'entities/Comment/model/types/comment';
import { AddNewCommentsFormSchema } from 'feature/addNewComment';
import { UiScrollSchema } from 'feature/UiScroll';
import { ArticleDetailsSchema } from 'pages/ArticlesDetailsPage';

export interface StateSchema {
  user: UserSchema;
  uiScroll: UiScrollSchema;

  // Async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
  articles?: ArticleSchema;
  articlesDetails?: ArticleDetailsSchema;
  comments?: CommentsSchema;
  addCommentForm?: AddNewCommentsFormSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getMountedReducers: () => MountedReducers;
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
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
